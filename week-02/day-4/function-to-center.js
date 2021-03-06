'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawToCenter(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

for (let i = 0; i <= canvas.width; i += 20) {
  drawToCenter(i, 0);
}

for (let i = 0; i <= canvas.width; i += 20) {
  drawToCenter(800, i);
}

for (let i = 0; i <= canvas.width; i += 20) {
  drawToCenter(i, 800);
}

for (let i = 0; i <= canvas.width; i += 20) {
  drawToCenter(0, i);
}
