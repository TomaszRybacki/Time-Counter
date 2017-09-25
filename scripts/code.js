/*jslint es6 */

const endWorld = new Date("December 30, 2017 12:00:00").getTime();

const daysElem = document.getElementById("days");
const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");


let update = setInterval(function () {
    "use strict";
    let now = new Date().getTime();
    let timeleft = endWorld - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    daysElem.textContent = days;
    hoursElem.textContent = hours;
    minutesElem.textContent = minutes;
    secondsElem.textContent = seconds;
    secondsElem.classList.add("pulse");


    setTimeout(function () {
       secondsElem.classList.remove("pulse");
    }, 800);


    if (timeleft < 0) {
        clearInterval(update);
        daysElem.textContent = "PRZ";
        hoursElem.textContent = "EGA";
        minutesElem.textContent = "PIŁ";
        secondsElem.textContent = "EŚ!";
    }
}, 1000);

const timeElem = document.getElementById("time");
const titleElem = document.getElementById("title");

titleElem.onmouseover = function (e) {
    "use strict";
    timeElem.classList.add("slideInDown");
};

titleElem.onmouseout = function (e) {
    "use strict";
    timeElem.classList.remove("slideInDown");
};





