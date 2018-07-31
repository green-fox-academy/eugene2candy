'use strict';
// - Create a variable named `r` with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

const r = [54, 23, 66, 12];

function sum12(params) {
  let s = 0;
  if (params.length >= 3) {
    s = params[1] + params[2];
  }
  return s;
}

console.log(sum12(r));
