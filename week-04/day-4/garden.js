class Garden {
  constructor(water) {
    this.water = water;
    this.wateraverage = 0;
    this.flow = [];
    this.tree = [];
    this.rwater = 0;
  }

  addflow(f) {
    this.flow.push(f);
  }

  addtree(t) {
    this.tree.push(t);
  }

  watering() {
    if (this.water > 0) {
      console.log(`Watering with ${this.water}`);
      this.wateraverage = this.water / (this.flow.length + this.tree.length);
      this.flow.forEach((e) => {
        e.rwater += this.wateraverage * 0.75;
      });
      this.tree.forEach((e) => {
        e.rwater += this.wateraverage * 0.4;
      });
    }
  }

  printfat() {
    this.flow.forEach((e) => {
      if (e.rwater > 5) {
        console.log(`The ${e.color} Flower doesnt needs water`);
      } else {
        console.log(`The ${e.color} Flower needs water`);
      }
    });
    this.tree.forEach((e) => {
      if (e.rwater > 10) {
        console.log(`The ${e.color} Tree doesnt needs water`);
      } else {
        console.log(`The ${e.color} Tree needs water`);
      }
    });
  }
}

class Flower extends Garden {
  constructor(color, rwater) {
    super(rwater);
    this.color = color;
  }
}

class Trees extends Garden {
  constructor(color, rwater) {
    super(rwater);
    this.color = color;
  }
}

const yellow = new Flower('yellow', 0);
const blue = new Flower('blue', 0);
const purple = new Trees('purple', 0);
const orange = new Trees('orange', 0);

const gard0 = new Garden(0);
gard0.addflow(yellow);
gard0.addflow(blue);
gard0.addtree(purple);
gard0.addtree(orange);
gard0.watering();
gard0.printfat();

const gard1 = new Garden(40);
gard1.addflow(yellow);
gard1.addflow(blue);
gard1.addtree(purple);
gard1.addtree(orange);
gard1.watering();
gard1.printfat();

const gard2 = new Garden(70);
gard2.addflow(yellow);
gard2.addflow(blue);
gard2.addtree(purple);
gard2.addtree(orange);
gard2.watering();
gard2.printfat();
