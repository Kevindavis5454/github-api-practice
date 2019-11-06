'use strict';

const options = {
    headers: new Headers({
        "User-Agent" : 'Kevin'})
};


function getUserRepo() {
    const baseRepo = "https://api.github.com/users/";
    let userName = $('#js-user-handle').val();
    fetch(baseRepo + userName + "/repos", options)
        .then(response => response.json())
        .then(responseJson=>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong, try again later'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results').empty();
    if (responseJson.status === 'error') {
        $('.results').append(`<p> Git hub User Not found</p>`);}
    else {
        for (let i = 0; i < responseJson.length; i++){

            $('.results').append(
                `
                    <li> ${responseJson[i].name}
                    <a href="${responseJson[i].html_url}">Repo Link</a>
                    </li>
                `)
        }

    }
    $('.results').removeClass('hidden');
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getUserRepo();
    });

}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
});