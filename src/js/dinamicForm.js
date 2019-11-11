"use strict";

import { dateNow } from './utils/dateNow';
import  {cleanAlert}  from './utils/alert';

const form = document.querySelector('#content-form'),
    inputName = document.querySelector('#name'),
    inputPhone = document.querySelector('#phone'),
    inputDirection = document.querySelector('#direction'),
    inputDate = document.querySelector('#input-date'),
    inputTime = document.querySelector('#time');


function openForm() {

    form.style.display = 'block';
    form.style.top = '0';
}

function closeForm() {

    form.style.top = '-100%';
    inputName.value = "";
    inputPhone.value = "";
    inputDirection.value = "";
    inputDate.value = dateNow();
    inputTime.value = "--";
    cleanAlert();
}

export { openForm, closeForm };