const csvToJson = require('convert-csv-to-json');

const t0 = new Date().getTime();
const json = csvToJson.getJsonFromCsv('100worst.csv');

function findYearOfMostWorstSong(param) {
  const years = []; // get all 100 years
  param.forEach((e) => {
    years.push(e.year);
  });
  years.sort();
  let current = ''; // year
  let cnt = 0; // count
  const ye = []; // 2d array of year and count
  years.forEach((e) => {
    if (e !== current) {
      if (cnt > 0) {
        // console.log(current + ' ' + cnt);
        ye.push([current, cnt]);
      }
      current = e;
      cnt = 1;
    } else {
      cnt += 1;
    }
  });
  if (cnt > 0) {
    // console.log(current + ' ' + cnt);
    ye.push([current, cnt]);
  }
  const onlycnt = []; // get an array from 2d array with only count times
  ye.forEach((e) => {
    onlycnt.push(e[1]);
  });
  const maxcount = Math.max.apply(null, onlycnt); // find max count time
  const resultyear = []; // the year(s) related to the max count time, the result maybe more than 1
  ye.forEach((e) => {
    if (e[1] === maxcount) {
      resultyear.push(e[0]);
    }
  });
  return `The year when the most worst songs came out is ${resultyear.join(',')}`;
}

// function findYearOfMostWorstSong(param) {
//   let count = 0;
//   let countMax = 1;
//   let resultyear = [];
//   param.forEach((m) => {
//     param.forEach((n) => {
//       if (m.year === n.year) {
//         count += 1;
//       }
//       if (count === countMax) {
//         if (!resultyear.includes(m.year)) {
//           resultyear += ` , ${m.year}`;
//         }
//       }
//       if (count > countMax) {
//         countMax = count;
//         resultyear = m.year;
//       }
//     });
//     count = 0;
//   });
//   return `The year when the most worst songs came out is ${resultyear}`;
// }

console.log(findYearOfMostWorstSong(json));
const t1 = new Date().getTime();
console.log(`Execution time: ${t1 - t0} milliseconds`);
