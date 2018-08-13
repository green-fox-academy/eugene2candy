function Sharpie(color, width) {
  this.color = color;
  this.width = width;
  this.inkAmount = 100;
  this.usage = use;
}

function use() {
  while (this.inkAmount >= this.width) {
    this.inkAmount -= this.width;
    console.log(this.inkAmount);
  }
}

const red = new Sharpie('red', 20);
const black = new Sharpie('black', 30);

red.usage();
black.usage();
