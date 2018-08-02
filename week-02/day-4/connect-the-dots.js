'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function connectTheDots(params) {
  ctx.beginPath();
  ctx.moveTo(params[0][0], params[0][1]);
  for (let i = 1; i < params.length; i++) {
    ctx.lineTo(params[i][0], params[i][1]);
  }
  ctx.lineTo(params[0][0], params[0][1]);
  ctx.stroke();
}

connectTheDots([[10, 10], [290, 10], [290, 290], [10, 290]]);
connectTheDots([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]);
