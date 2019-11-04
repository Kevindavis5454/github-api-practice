'use strict';


function getUserRepo() {
    const baseRepo = "https://api.github.com/users/:";
    let userName = $('#js-user-handle').val();
    fetch(baseRepo + userName + "/repos")
        .then(response => response.json())
        .then(responseJson=>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong, try again later'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    if (responseJson.status === 'error') {
        $('.results').append(`<p> Git hub User Not found</p>`);}
    else {

    }
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