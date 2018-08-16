'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

function Animals(speak) {
  this.speak = speak;
}

Animals.prototype.say = function () {
  console.log(this.speak);
};

const dog = new Animals('wangwang');
dog.say();
