'use strict';

const lineCount31 = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i = 1; i <= lineCount31; i++) {
  if (i == 1 || i == lineCount31) {
   console.log('%%%%%');
  }
  else {
    console.log('%   %');
  }
}
