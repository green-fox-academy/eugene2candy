'use strict';

// split and join
const myText = 'a nice text';
const myOtherText = myText + ' the end of the text';
const myNumber = 12;
console.log(myOtherText + ' ' + myNumber);
console.log(myNumber + myOtherText);
console.log(`this is my number ${12}`);
console.log(`this is my number ${myNumber}`);

console.log(`this is the third character ${myText[2]}`);
const myTestText = 'Hello dear';
console.log(myTestText.indexOf('k'));
console.log(myTestText.length);
console.log(myTestText.substr(2, 3));
console.log(myTestText.substr(-2, 2));

console.log(myTestText.split());
console.log(myTestText.split(''));
console.log(myTestText.split(' '));

// string as an array


// string template literal


// string methods


// string constructor
const myConstructedText = new String('apple tree');
console.log(myConstructedText);
console.log(new String('a') === new String('a'));
