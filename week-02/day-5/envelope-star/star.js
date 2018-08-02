'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// zone 1
for (let i = 0; i < 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(canvas.width / 2, 0 + 40 * i);
  ctx.lineTo(canvas.width / 2 + 40 * i, canvas.height / 2);
  ctx.stroke();
}

// zone 2
for (let i = 1; i < 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(canvas.width / 2, 0 + 40 * i);
  ctx.lineTo(canvas.width / 2 - 40 * i, canvas.height / 2);
  ctx.stroke();
}

// zone 3
for (let i = 0; i < 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(canvas.width / 2, canvas.height - 40 * i);
  ctx.lineTo(canvas.width / 2 - 40 * i, canvas.height / 2);
  ctx.stroke();
}

// zone 4
for (let i = 1; i < 10; i++) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(canvas.width / 2, canvas.height - 40 * i);
  ctx.lineTo(canvas.width / 2 + 40 * i, canvas.height / 2);
  ctx.stroke();
}
