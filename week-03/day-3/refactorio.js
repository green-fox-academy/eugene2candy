'use strict';
// Create a recursive function called `refactorio`
// that returns it's input's factorial

const refactorio = (n) => {
  if (n < 2) {
    return 1;
  } else {
    return n * refactorio(n - 1);
  }
};

console.log(refactorio(3));
