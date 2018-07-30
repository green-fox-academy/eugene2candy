'use strict';

// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"



//23
//for (let i = 0; i < 100; i++) {
//  console.log("I won't cheat on the exam!");
//}



//24
// Create a program that prints all the even numbers between 0 and 500
//for (let i = 0; i <= 500; i++) {
//  if (i%2 == 0) {
//    console.log(i);
//  }
//}



//25
//const number = 15;

// Create a program that
// prints the multiplication table with number
//
// Example:
// The number 15 should print:
//
// 1 * 15 = 15
// 2 * 15 = 30
// 3 * 15 = 45
// 4 * 15 = 60
// 5 * 15 = 75
// 6 * 15 = 90
// 7 * 15 = 105
// 8 * 15 = 120
// 9 * 15 = 135
// 10 * 15 = 150

//for (let i = 1; i <= 10; i++) {
//  console.log(i + ' * 15 = ' + i * 15);
//}



//27
// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print 'Fizz' instead of the number
// and for the multiples of five print 'Buzz'.
// For numbers which are multiples of both three and five print 'FizzBuzz'.

//for (let i = 1; i <= 100; i++) {
//  if (i%3==0 && i%5==0) {
//    console.log('FizzBuzz');
//  }
//  else if (i%3==0) {
//    console.log('Buzz');
//  }
//  else {
//    console.log(i);
//  }
//}


//28
const lineCount28 = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

//var a = '*';
//for (let i = 1; i <= lineCount28; i++) {
//  console.log(a.repeat(i));
//}


//29
const lineCount29 = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

//var pyramid = "";
//for(let i = 1; i <= lineCount29; i++){
//  pyramid = "";
//  for(let j = i; j < lineCount29; j++){
//    pyramid += " ";
//  }
//  for(let k = 0; k < (i*2)-1 ; k++){
//    pyramid += "*";
//  }
//  console.log(pyramid);
//}

//30???????????????????????????????????
const lineCount30 = 7;
// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

//function diamond(val) {
//  var i, j, shape = '';

//  for (i = 0; i < val * 2 - 1; i++) {
//    j = i < val ? i : val * 2 - i - 2;
//    shape += Array(val - j).join(' ') + Array(j + 1).join('* ') + '\n';
//  }
//  console.log(shape);
//}

//diamond(lineCount30);


//31

const lineCount31 = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

//for (let i = 1; i <= lineCount31; i++) {
//  if (i == 1 || i == lineCount31) {
//   console.log('%%%%%');
//  }
//  else {
//    console.log('%   %');
//  }
//}



//32
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

// for (let i = 1; i <= lineCount32; i++) {
//   if (i == 1 || i == lineCount32) {
//     console.log('%%%%%');
//   }
//   else if (i-1 == 1) {
//     console.log('%%  %');
//   }
//   else if (i-1 == 2) {
//     console.log('% % %');
//   }
//   else if (i-1 == 3) {
//     console.log('%  %%');
//   }
//   else {
//     console.log('%   %');
//   }
// }



//34
// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4

//readline is not defined??????????????????




//35
// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

/* for (let i = 1; i <= 8; i++) {
  if (i%2 == 1) {
    console.log('% % % %');
  }
  else {
    console.log(' % % % %');
  }
} */
