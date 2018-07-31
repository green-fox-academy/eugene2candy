'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result

function sum(el) {
  let summing = 0;
  for (let i = 1; i <= el; i++) {
    summing += i;
  }
  console.log(summing);
}

sum(4);
