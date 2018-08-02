const canvas = document.querySelector('.my-canvas');
const context = canvas.getContext('2d');
context.fillRect(20, 20, 100, 100);

const drawSquare = (x, y, size) => {
  context.fillRect(x, y, size, size);
};

const drawTriangle = (x, y, size) => {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y + size);
  context.lineTo(x + size, y);
  context.lineTo(x, y);
  context.stroke();
};

drawSquare(60, 60, 100);
drawSquare(100, 100, 100);
drawTriangle(200, 200, 100);
