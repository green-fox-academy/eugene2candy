'use strict';
// Given base and n that are both 1 or more, compute recursively (no loops)
// the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
let result = 1;
const powerN = (value, power) => {
  if (power > 1) {
    result *= value;
    powerN(value, power - 1);
  } else {
    result *= value;
    console.log(result);
  }
};

powerN(3, 4);
