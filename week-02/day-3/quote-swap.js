'use strict';
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code

// Also, log the sentence to the console with spaces in between.
// Create a function called quoteSwap().

const words = ['What', 'I', 'do', 'create,', 'I', 'cannot', 'not', 'understand.'];

function quoteSwap(params) {
  let newwords = params;
  for (let i = 0; i < newwords.length; i++) {
    if (newwords[i] === 'do') {
      newwords[i] = 'cannot';
    } else if (newwords[i] === 'cannot') {
      newwords[i] = 'do';
    }
  }
  return newwords.join(' ');
}

console.log(quoteSwap(words));
// Expected output: "What I cannot create I do not understand."

module.exports = quoteSwap;
