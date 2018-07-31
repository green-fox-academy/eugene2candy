'use strict';
// - Create a function called `printParams`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)

const arr = [1, 2, 3];

function printParams(param) {
  let pri = '';
  pri = param.join(' ');
  return pri;
}

console.log(printParams(arr));
