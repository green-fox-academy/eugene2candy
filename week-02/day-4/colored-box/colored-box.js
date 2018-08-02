'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'green';
ctx.moveTo(100, 100);
ctx.lineTo(500, 100);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'red';
ctx.moveTo(500, 100);
ctx.lineTo(500, 300);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'grey';
ctx.moveTo(500, 300);
ctx.lineTo(100, 300);
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = 'yellow';
ctx.moveTo(100, 300);
ctx.lineTo(100, 100);
ctx.stroke();
