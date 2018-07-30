'use strict';

const lineCount29 = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var pyramid = "";
for(let i = 1; i <= lineCount29; i++){
  pyramid = "";
  for(let j = i; j < lineCount29; j++){
    pyramid += " ";
  }
  for(let k = 0; k < (i*2)-1 ; k++){
    pyramid += "*";
  }
  console.log(pyramid);
}
