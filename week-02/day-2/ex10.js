'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

const abc = ["Arthur", "Boe", "Chloe"];

function Swap(params) {
  let tmp = '';
  if (params.length >= 3) {
    tmp = params[0];
    params[0] = params[2];
    params[2] = tmp;
  }
  return params;
}

console.log(Swap(abc));
