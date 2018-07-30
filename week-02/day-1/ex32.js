'use strict';

const lineCount32 = 6;
// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  % 2-1
// % % % 3-1
// %  %% 4-1
// %   % 5-1
// %%%%%
//
// The square should have as many lines as lineCount is

for (let i = 1; i <= lineCount32; i++) {
  if (i == 1 || i == lineCount32) {
    console.log('%%%%%');
  }
  else if (i-1 == 1) {
    console.log('%%  %');
  }
  else if (i-1 == 2) {
    console.log('% % %');
  }
  else if (i-1 == 3) {
    console.log('%  %%');
  }
  else {
    console.log('%   %');
  }
}
