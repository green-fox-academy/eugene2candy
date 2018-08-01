'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText = ' - Buy milk\n';

const theBegin = 'My todo:\n';
const theEnd = ' - Download games\n';
const indention = '    ';
const diable = ' - Diablo';

todoText = theBegin + todoText + theEnd + indention + diable;

console.log(todoText);
