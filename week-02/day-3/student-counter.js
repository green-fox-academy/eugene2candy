'use strict';

const students = [
  { name: 'Theodor', age: 3, candies: 2 },
  { name: 'Paul', age: 9.5, candies: 2 },
  { name: 'Mark', age: 12, candies: 5 },
  { name: 'Peter', age: 7, candies: 3 },
  { name: 'Olaf', age: 12, candies: 7 },
  { name: 'George', age: 10, candies: 1 },
];

// create a function that takes a list of students and logs:
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candy(params) {
  let sumCandy = 0;
  for (let i = 0; i < params.length; i++) {
    sumCandy += params[i].candies;
  }
  return sumCandy;
}

function age(params1) {
  let sumAge = 0;
  for (let i = 0; i < params1.length; i++) {
    if (params1[i].candies < 5) {
      sumAge += params1[i].age;
    }
  }
  return sumAge;
}

console.log(candy(students));
console.log(age(students));
