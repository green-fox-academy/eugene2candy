'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

for (let i = 1; i < 20; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'purple';
  ctx.moveTo(0 + 40 * i, 0);
  ctx.lineTo(canvas.width, 0 + 40 * i);
  ctx.stroke();
}

for (let i = 1; i < 20; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(0, 0 + 40 * i);
  ctx.lineTo(0 + 40 * i, canvas.height);
  ctx.stroke();
}
