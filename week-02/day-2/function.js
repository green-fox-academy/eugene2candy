const double = function(number = 3) {
  return number * 2;
}

const doubleArrow = (number) => {
  return number * 2;
}

const doubleAA = number => number * 2;

console.log(double());
console.log(double(4));
console.log(doubleArrow(5));
console.log(doubleAA(6));
