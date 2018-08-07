'use strict';

const mapWith = (array, callback) => {
  let output = [];

  // The mapWith() function should iterate over the given array and call the callback function on every element.
  // It stores the callback return values in the output.
  // The mapWith() should return with the output array.
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
};

const removeSecondLetter = (str) => {
  let newWord = '';
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newWord += str.slice(i, i + 1);
    }
  }
  return newWord;
};

// Exercise 2:

// Create a callback function which removes every second character from a string

const words = ['map', 'reduce', 'filter'];

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']
