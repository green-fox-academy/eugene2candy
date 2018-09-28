// function count() {
//   const arrayelements = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'f', 'g', 'h', 'h', 'h', 'e', 'a'];
//   arrayelements.sort();
//   let current = [];
//   let cnt = 0;
//   arrayelements.forEach((e) => {
//     if (e !== current) {
//       if (cnt > 0) {
//         console.log(current + ' ' + cnt);
//       }
//       current = e;
//       cnt = 1;
//     } else {
//       cnt += 1;
//     }
//   });
//   if (cnt > 0) {
//     console.log(current + ' ' + cnt);
//   }
// }

// count();


// const pa2 = ['shit', 'fuck'];
// const a = 'shit.';
// const b = 'shit,';
// const c = 'shit';

// console.log(pa2.includes((a.replace(/\./g, '')).toString().toLowerCase()));
// console.log(pa2.includes((b.replace(/,/g, '')).toString().toLowerCase()));
// console.log(pa2.includes((c.replace(/\./g, '')).toString().toLowerCase()));
// console.log(pa2.includes((c.replace(/,/g, '')).toString().toLowerCase()));


// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3, 2, 2, 2];
// let mf = 1;
// let m = 0;
// const item = [];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = i; j < arr1.length; j++) {
//     if (arr1[i] === arr1[j]) {
//       m += 1;
//     }
//     if (mf <= m) {
//       mf = m;
//       item.push(arr1[i]);
//     }
//   }
//   m = 0;
// }
// console.log(`${item} ( ${mf} times ) `);
