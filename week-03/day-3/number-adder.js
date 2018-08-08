'use strict';

// Write a recursive function that takes one parameter: n and adds numbers from 1 to n.
let result = 0;
const numAdd = (p) => {
  if (p > 0) {
    result += p;
    numAdd(p - 1);
  } else {
    console.log(result);
  }
};

numAdd(3);
