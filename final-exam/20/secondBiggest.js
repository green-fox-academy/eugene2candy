const numArray = [33, 22, 1, 3, 90];
numArray.sort((a, b) => a - b);

const secondBiggest = numArray.length - 2;

console.log(numArray[secondBiggest]);
