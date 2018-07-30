'use strict';

//12
// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var cuboid = {long: 10.0, width: 10.0, height: 10.0};
console.log('Surface area: ' + 2* (cuboid.long * cuboid.width + cuboid.long * cuboid.height + cuboid.width * cuboid.height));
console.log('Volume: ' + cuboid.long * cuboid.width * cuboid.height);

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

