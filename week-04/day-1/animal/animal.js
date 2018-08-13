function Animal(hunger = 5, thirst = 5) {
  this.hunger = hunger;
  this.thirst = thirst;
  this.eat = eat;
  this.drink = drink;
  this.play = play;
}

function Farm(slot) {
  this.slot = slot;
  this.animals = animals;
  this.breed = breed;
  this.slaughter = slaughter;
  this.report = report;
  this.progress = progress;
}

// Create a sheep farm with 20 slots
const SheepFarm = new Farm(20);

console.log(SheepFarm.animals); // Should log 20 Animal objects

const button = document.querySelector('button');

// Add a click event to the button and call 'progress'

// The progress function should log the following to the console:
//  - The farm has 20 living animals, we are full
