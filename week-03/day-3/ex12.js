'use strict';

const c = document.getElementById('main-canvas');
const ctx = c.getContext('2d');

let w = c.width;
let h = c.height;

const ex12 = (x, y, size, count) => {
  if (count >= 1) {
    ctx.strokeRect(x, y, size, size);
    ex12(size / 3 + x, y, size / 3, count - 1);
    ex12(size / 3 + x, size * 2 / 3 + y, size / 3, count - 1);
    ex12(x, size / 3 + y, size / 3, count - 1);
    ex12(size * 2 / 3 + x, size / 3 + y, size / 3, count - 1);
  }
};

ex12(0, 0, w, 5);
