'use strict';
// We have a number of bunnies and each bunny has two big floppy ears.
// We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).
let result = 0;
const countEar = (bunny) => {
  if (bunny > 0) {
    result += 2;
    countEar(bunny - 1);
  } else {
    console.log(result);
  }
};

countEar(4);
