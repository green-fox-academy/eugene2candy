'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// vertical line 1
for (let j = 0; j < 4; j++) {
  ctx.beginPath();
  ctx.moveTo(20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 2
for (let j = 0; j < 5; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) - 10 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) - 10 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 3
for (let j = 0; j < 6; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) - 20 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) - 20 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 4
for (let j = 0; j < 7; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 30 + 30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) - 30 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 30 + 30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) - 30 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 5
for (let j = 0; j < 6; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 30 + 30 + 30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) - 20 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 30 + 30 + 30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) - 20 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 6
for (let j = 0; j < 5; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 30 + 30 + 30 + 30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) - 10 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 30 + 30 + 30 + 30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) - 10 * Math.sqrt(3) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// vertical line 7
for (let j = 0; j < 4; j++) {
  ctx.beginPath();
  ctx.moveTo(30 + 30 + 30 + 30 + 30 + 30 + 20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0) + j * 20 * Math.sqrt(3));
  for (let i = 0; i < 7; i++) {
    ctx.lineTo(30 + 30 + 30 + 30 + 30 + 30 + 20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6) + j * 20 * Math.sqrt(3));
  }
  ctx.stroke();
}

// ctx.beginPath();
// ctx.moveTo(20 + 20 * Math.cos(0), 100 + 20 * Math.sin(0));
// for (let i = 0; i < 7; i++) {
//   ctx.lineTo(20 + 20 * Math.cos(i * 2 * Math.PI / 6), 100 + 20 * Math.sin(i * 2 * Math.PI / 6));
// }
// ctx.stroke();
