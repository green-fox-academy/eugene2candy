'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  console.log(fac);
}

factorio(3);
