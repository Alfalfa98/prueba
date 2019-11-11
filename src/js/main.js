"use strict";

import './utils/createHours';
import { openForm, closeForm } from './dinamicForm';
import { dateNow } from './utils/dateNow';
import  {openAlert, cleanAlert}  from './utils/alert';

const inputName = document.querySelector('#name'),
    inputPhone = document.querySelector('#phone'),
    inputDirection = document.querySelector('#direction'),
    inputDate = document.querySelector('#input-date'),
    inputTime = document.querySelector('#time'),
    div = document.querySelector('#list'),
    alertMessage = document.querySelector('#alert-message'),
    d = new Date(),
    appointmentList = [];


inputDate.min = dateNow();// min date
inputDate.value = dateNow();// date today

inputDate.addEventListener('change', refreshSelect);

document.querySelector('#btn-save').addEventListener('click', validate);//
document.querySelector('#btn-open').addEventListener('click', openForm);//
document.querySelector('#btn-close').addEventListener('click', closeForm);//


function newAppointmentList(obj) {

    appointmentList.push(obj);

    refreshSelect();

    alert("cita registrada");

    closeForm();
}

function refreshSelect() {

    inputTime.value = "--";
    const array = [];

    for (let i = 0, max = appointmentList.length; i < max; i++) {

        const element = appointmentList[i];
        const item = document.getElementById(`${element.time}`);

        item.style.display = 'inline-block';

        if (document.querySelector('#input-date').value === element.date) {
            array.push(item);
        }
    }
    for (let i = 0, max = array.length; i < max; i++) {
        const element = array[i];
        element.style.display = 'none';
    }
}

function validate() {

    const minCharacters = 6;

    if (!inputDate.value ||
        inputTime.value === '--' ||
        !inputDirection.value ||
        !inputPhone.value ||
        !inputName.value) {
        return openAlert("Complete todos los campos.");
    }

    if (inputName.value.length < minCharacters ||
        inputPhone.value.length < minCharacters ||
        inputDirection.value.length < minCharacters) {
        return openAlert("Intruduzca datos validos.");
    }

    if ((inputDate.valueAsDate.getDate() + 1) < d.getDate()) {
        return openAlert("Fecha no valida.");
    }

    const appointment = {
        name: `${inputName.value}`,
        phone: `${inputPhone.value}`,
        direction: `${inputDirection.value}`,
        date: inputDate.value,
        time: `${inputTime.value}`, 
    }

    newAppointmentList(appointment);
    showList();

    inputName.value = "";
    inputPhone.value = "";
    inputDirection.value = "";
    inputDate.value = dateNow();
    inputTime.value = "--";
    cleanAlert();
}

function showList() {

    const tr = document.createElement('tr');

    for (let i = 0, max = appointmentList.length; i < max; i++) {

        const element = appointmentList[i];

        tr.innerHTML = `<td>${element.name}</td>
        <td>${element.phone}</td>
        <td>${element.time}</td>
        <td>${element.date}</td>`;

        div.appendChild(tr);
    }
}