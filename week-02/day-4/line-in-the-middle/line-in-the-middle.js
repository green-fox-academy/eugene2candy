'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.

function red(x, y) {
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = 'red';
  ctx.moveTo(0, y / 2);
  ctx.lineTo(x, y / 2);
  ctx.stroke();
}

function green(x, y) {
  ctx.beginPath();
  ctx.lineWidth = '5';
  ctx.strokeStyle = 'green';
  ctx.moveTo(x / 2, 0);
  ctx.lineTo(x / 2, y);
  ctx.stroke();
}

red(canvas.width, canvas.height);
green(canvas.width, canvas.height);
