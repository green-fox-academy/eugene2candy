'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

function tri(x, y, size) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size / 2, y - 15 * Math.sqrt(3));
  ctx.lineTo(x, y);
  ctx.stroke();
}

function drawTri(k) {
  for (let i = 1; i < 21 - k; i++) {
    for (let j = 0 + k; j < 1 + k; j++) {
      tri(30 * i + 15 * j, 700 - 15 * Math.sqrt(3) * j, 30);
    }
  }
}

for (let k = 0; k < 20; k++) {
  drawTri(k);
}
