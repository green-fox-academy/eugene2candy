const Panama = {
  cash: 0,
  name: 'Panama',
  tax: 0.01,
  deposit: function d(amount) {
    // to be implemented
    this.cash += amount;
  },
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: 0.05,
  deposit: function d(amount) {
    this.cash += amount;
  },
};

const Shuffler = {
  cash: 10000,
  pick: function p(name) {
    // to be implemented
    if (name === 'Panama') {
      Shuffler.pick.bind(Panama);
      this.cash -= 1000;
      Panama.deposit(1000);
      console.log('Panama got 1000');
    } else if (name === 'Cyprus') {
      Shuffler.pick.bind(Cyprus);
      this.cash -= 1000;
      Cyprus.deposit(1000);
      console.log('Cyprus got 1000');
    }
  },
};

Shuffler.pick('Panama'); // prints Panama got 1000
Shuffler.pick('Cyprus'); // prints Cyprus got 1000
Shuffler.pick('Panama'); // prints Panama got 1000
Shuffler.pick('Cyprus'); // prints Cyprus got 1000

console.log(Panama.cash); // 2000
console.log(Cyprus.cash); // 2000
console.log(Shuffler.cash);
