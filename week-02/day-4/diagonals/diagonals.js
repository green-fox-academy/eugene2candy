'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the canvas' diagonals.
// If it starts from the upper-left corner it should be green, otherwise it should be red.
ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'green';
ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'red';
ctx.moveTo(canvas.width, 0);
ctx.lineTo(0, canvas.height);
ctx.stroke();
