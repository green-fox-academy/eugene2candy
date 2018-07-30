'use strict';

const lineCount28 = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

var a = '*';
for (let i = 1; i <= lineCount28; i++) {
  console.log(a.repeat(i));
}
