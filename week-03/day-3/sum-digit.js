'use strict';
// Given a non-negative int n, return the sum of its digits recursively (no loops).
// Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), while
// divide (/) by 10 removes the rightmost digit (126 / 10 is 12).
let result = 0;
const sumDigit = (p) => {
  if (p > 10) {
    result += (p % 10);
    sumDigit(Math.floor(p / 10));
  } else {
    result += p;
    console.log(result);
  }
};

sumDigit(123);
