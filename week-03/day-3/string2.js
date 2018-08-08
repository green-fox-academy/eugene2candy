'use strict';
// Given a string, compute recursively a new string where all the 'x' chars have been removed.
let result = [];
const repl = (param) => {
  if (param.length > 0) {
    if (param.slice(0, 1) === 'x') {
      result.push('');
      repl(param.slice(1, param.length));
    } else {
      result.push(param.slice(0, 1));
      repl(param.slice(1, param.length));
    }
  } else {
    console.log(result.join(''));
  }
};

repl('xyx');
