'use strict';

//30???????????????????????????????????
const lineCount30 = 7;
// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

function diamond(val) {
  var i, j, shape = '';

  for (i = 0; i < val * 2 - 1; i++) {
    j = i < val ? i : val * 2 - i - 2;
    shape += Array(val - j).join(' ') + Array(j + 1).join('* ') + '\n';
  }
  console.log(shape);
}

diamond(lineCount30);

