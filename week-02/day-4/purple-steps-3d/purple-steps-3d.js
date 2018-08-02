'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/purple-steps-3d/r4.png]
function drawBox(x, y, i, j) {
  ctx.fillStyle = 'purple';
  ctx.strokeRect(j * x, j * y, i * x, i * y);
  ctx.fillRect(j * x, j * y, i * x, i * y);
}

function triangular(value) {
  const abs = Math.abs(value);
  return ((abs / 2) * (abs + 1)) * (abs / value) || 0;
}

for (let i = 1; i < 8; i++) {
  const j = triangular(i - 1);
  drawBox(10, 10, i, j);
}
