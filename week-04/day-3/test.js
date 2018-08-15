class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.pin = 0;
  }
  // // Getter
  // get area() {
  //   return this.calcArea();
  // }
  // Method

  calcArea() {
    this.pin = this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea()); // 100
