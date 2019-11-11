"use strict";

const d = new Date();

function dateNow() {

    let day;

    if (d.getDate() < 10) {
        day = '0' + d.getDate();
    } else {
        day = d.getDate();
    }

    return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + day;
}

export {dateNow};