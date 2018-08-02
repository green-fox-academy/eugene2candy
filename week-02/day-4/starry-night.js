'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

function drawBackground(x, y) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, x, y);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function drawStar(params) {
  // (Math.random() * 800)
  ctx.fillStyle = params;
  ctx.fillRect((Math.random() * 800), (Math.random() * 800), 5, 5);
}

drawBackground(canvas.width, canvas.height);
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
drawStar(getRandomColor());
