'use strict';

// object creation
const myObject = {
  a: 12,
  b: 13,
};

const myOtherObject = myObject;
myOtherObject.a = 23;
console.log(myObject.a);
console.log(myOtherObject.a);

const aObj = { a: 12 };
const bObj = { a: 12 };
console.log(aObj === bObj);

const myArray = [];
myArray.push(2);

const zh = {
  kj: 12,
  lk: 23,
  de: 89,
};

const { kj, lk } = zh;
console.log(kj);
console.log(lk);


const functionTestObj = {
  a: 12,
  b: 13,
};

// original one will be changed,
// but if it is a single string or element not an object, it won`t be changed.
function changeObj(obj) {
  obj.b = 14;
}

changeObj(functionTestObj);
console.log(functionTestObj.b);
