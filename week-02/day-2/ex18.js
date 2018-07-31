'use strict';
// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//   // 4
//   0 0 0 1  // 3
//   0 0 1 0  // 2
//   0 1 0 0  // 1
//   1 0 0 0  // 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

function matri(num) {
  const array = Array(num).fill().map(() => Array(num).fill(0));
  for (let i = 0; i < num; i++) {
    array[i][num - 1 - i] = 1;
  }
  const l = array.length;
  for (let i = 0; i < l; i++) {
    if (array[i] instanceof Array) {
      array[i] = array[i].join(' ');
    }
  }
  return array.join('\n');
}

console.log(matri(5));
