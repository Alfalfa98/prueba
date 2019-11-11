"use strict";

function openAlert(text) {

    document.querySelector('#alert-message').innerHTML = `${text}`; 
    document.querySelector('#alert-message').style.color = '#721c24'; 
    document.querySelector('#alert-message').style.display = 'block'; 
}

function cleanAlert() {

    document.querySelector('#alert-message').innerHTML = ``; 
    document.querySelector('#alert-message').style.display = 'none';
}

export  {openAlert, cleanAlert};