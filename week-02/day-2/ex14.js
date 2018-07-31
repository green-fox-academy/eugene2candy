'use strict';
// - Create a variable named `animals`
//   with the following content: `['koal', 'pand', 'zebr']`
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

const animals = ['koal', 'pand', 'zebr'];
const a = 'a';
const replace = ani => ani + a;

const returnVal = animals.map(replace);

console.log(returnVal);
