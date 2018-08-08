'use strict';
// Given a string, compute recursively a new string where all the
// adjacent chars are now separated by a '*'.

let result = [];
const repl = (param) => {
  if (param.length > 1) {
    result.push(param.slice(0, 1));
    result.push('*');
    repl(param.slice(1, param.length));
  } else {
    result.push(param.slice(0, 1));
    console.log(result.join(''));
  }
};

repl('xyx');
