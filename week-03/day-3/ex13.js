'use strict';

const c = document.getElementById('main-canvas');
const ctx = c.getContext('2d');

let w = c.width;
let h = c.height;

const ex13 = (x, y, size, count) => {
  if (count >= 1) {
    ctx.beginPath();
    ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
    for (let i = 1; i <= 6; i += 1) {
      ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
    }
    ctx.stroke();
    ex13(size / 2 + x, y, size / 2, count - 1);
    ex13(x - size / 4, y + size * Math.sqrt(3) / 4, size / 2, count - 1);
    ex13(x - size / 4, y - size * Math.sqrt(3) / 4, size / 2, count - 1);
  }
};

ex13(300, 300, 300, 5);
