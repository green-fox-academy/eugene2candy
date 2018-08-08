'use strict';
// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
// (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
// have 3 ears, because they each have a raised foot. Recursively return the
// number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).
let result = 0;
const countEar = (bunny) => {
  if (bunny % 2 === 0 && bunny > 0) {
    result += 3;
    countEar(bunny - 1);
  } else if (bunny % 2 === 1 && bunny > 0) {
    result += 2;
    countEar(bunny - 1);
  } else {
    console.log(result);
  }
};

countEar(3);
