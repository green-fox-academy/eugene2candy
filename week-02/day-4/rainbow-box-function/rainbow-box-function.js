'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colorArray = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];

function rainbow(size, color) {
  for (let i = 0; i < 7; i++) {
    ctx.strokeStyle = color[i];
    ctx.strokeRect(canvas.width / 2 - size / 2 - (i * 30) / 2, canvas.height / 2 - size / 2 - (i * 30) / 2, size + i * 30, size + i * 30);
  }
}

rainbow(50, colorArray);
