const arr = [1, 2, 3, 4, 5, 6];

// const arrOdd = (arr) => {
//   let odds = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       odds.push(arr[i]);
//     }
//   }
//   return odds;
// }

// console.log(arrOdd(arr));

const isOdd = (number) => {
  // if (number % 2 ==1) {
  //   return true;
  // } else {
  //   return false;
  // }
  return number % 2 == 1;
}

const oddElement = arr.filter(isOdd);

console.log(oddElement.join('_'));
