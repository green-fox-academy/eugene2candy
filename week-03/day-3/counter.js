'use strict';
// Write a recursive function that takes one parameter: n and counts down from n.

const counter = (p) => {
  console.log(p);
  if (p > 0) {
    counter(p - 1);
  }
};

counter(6);
