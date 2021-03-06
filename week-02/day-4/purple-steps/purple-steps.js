'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps/r3.png]
function drawBox(x, y) {
  ctx.fillStyle = 'purple';
  ctx.strokeRect(x, y, 10, 10);
  ctx.fillRect(x, y, 10, 10);
}

for (let i = 1; i < 20; i++) {
  drawBox(10 * i, 10 * i);
}
