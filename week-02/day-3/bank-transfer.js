'use strict';
const accounts = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 },
];

// Create function that returns the name and balance of cash on an account in a list
function getNameAndBalance(params) {
  let result = '';
  result = params[0].clientName + ', ' + params[0].balance;
  return result;
}

console.log(getNameAndBalance(accounts));
// The output should be: "Igor", "203004099.2"

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(params1, a1, a2, num) {
  if (params1.map(function(e) { return e.accountNumber; }).indexOf(a1) !== -1 && params1.map(function(e) { return e.accountNumber; }).indexOf(a2) !== -1) {
    for (let i = 0; i < params1.length; i++) {
      if (params1[i].accountNumber === a1) {
        params1[i].balance -= num;
      } else if (params1[i].accountNumber === a2) {
        params1[i].balance += num;
      }
    }
  } else {
    console.log('404');
  }
  return params1;
}

console.log(transferAmount(accounts, 43546731, 23456311, 500.0));
// transferAmount(accounts, 43546731, 23456311, 500.0);
// After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
// ]

// module.exports = {
//   getNameAndBalance: getNameAndBalance,
//   transferAmount: transferAmount,
//   accounts: accounts
// };
