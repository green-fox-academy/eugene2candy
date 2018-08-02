'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function drawBox(x, y, i) {
  ctx.fillStyle = 'purple';
  ctx.strokeRect(x + i * x, y + i * y, i * x, i * y);
  ctx.fillRect(x + i * x, y + i * y, i * x, i * y);
}

for (let i = 0; i < 19; i++) {
  drawBox(10, 10, i);
}
