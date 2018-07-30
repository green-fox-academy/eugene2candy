'use strict';

//13
const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;
const minuteEachhour = 60;
const secondEachmin = 60;
const hourEachday = 24;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
console.log(hourEachday * minuteEachhour * secondEachmin - currentHours * minuteEachhour * secondEachmin - currentMinutes * secondEachmin - currentSeconds);
