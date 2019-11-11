"use strict";

const inputTime = document.querySelector('#time'),
    duration = document.querySelector('#duration');

document.querySelector('#btn-confirm-hours').addEventListener('click', ready);//

function ready() {

    if (duration.value > 60 ||
        duration.value === '0' ||
        duration.value === '' ) {

        return document.querySelector('#max-60').innerHTML = 'Valor no valido.';
    }

    addSelect(setTimeAprox(duration.value));// push hours date
    document.querySelector('#init').style.display = 'none';
    document.querySelector('#btn-open').style.display = 'block';
    document.querySelector('#max-60').innerHTML = '';
}

function setTimeAprox(num) {

    for (let i = 0; i <= 60; i++) {
        if (num === `${i}`) {
            num = i;
            break;
        }
    }

    if (!num) {
        num = 30;
    }

    const hoursList = [];
    let hour = 6;

    for (let min = 0; hour <= 11; min += num) {

        if (min >= 60) {
            min = min - 60;
            hour++;
        }

        if (min < 10) {
            hoursList.push(hour + ":0" + min);
        } else {
            hoursList.push(hour + ":" + min);
        }
    }

    return hoursList;
}

function addSelect(array) {

    if (inputTime.childElementCount > 1) {
        inputTime.innerHTML = "";
    }

    for (let i = 0, max = array.length; i < max; i++) {
        let element = array[i];
        const option = document.createElement('option');
        option.value = element;
        option.innerHTML = element;
        option.id = element;
        inputTime.appendChild(option);
    }
}