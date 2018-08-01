'use strict';

const shop_items = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array.
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called sweets() which takes the list as a parameter.
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

let newList = [];
function sweets(params) {
  newList = params;
  if (newList.indexOf(2) !== -1) {
    newList[newList.indexOf(2)] = 'Croissant';
  }
  if (newList.indexOf(false) !== -1) {
    newList[newList.indexOf(false)] = 'Ice cream';
  }
  return newList;
}

console.log(sweets(shop_items));

module.exports = sweets;
