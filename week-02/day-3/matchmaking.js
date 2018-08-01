'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

const girls = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
const boys = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function makingMatches(params1, params2) {
  let len = params1.length > params1.length ? params1.length : params2.length;
  let names = [];
  for (let i = 0; i < len; i++) {
    if (params1.length - 1 >= i) {
      names.push(params1[i]);
    }
    if (params2.length - 1 >= i) {
      names.push(params2[i]);
    }
  }
  return names;
}

console.log(makingMatches(girls, boys));

module.exports = makingMatches;
