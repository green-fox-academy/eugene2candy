'use strict';

function higherOrder(fn) {
  fn('hello');
}

function printText(text) {
  console.log(text);
}

printText('hello world');

higherOrder(printText);

const result = setTimeout(() => {
  console.log('hello ..');
}, 1000);

console.log('hello 2');
