'use strict';
const x = document.getElementsByClassName('slide');

let slideIndex = 3;

function displayIMG(n) {
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  x[slideIndex - 1].style.display = 'block';
}

displayIMG(slideIndex);

const last = () => {
  displayIMG(slideIndex -= 1);
};

const next = () => {
  displayIMG(slideIndex += 1);
};

const btnleft = document.getElementById('b1');
const btnright = document.getElementById('b2');

btnleft.addEventListener('click', last);
btnright.addEventListener('click', next);

document.getElementById('buttonclick').addEventListener('click', (event) => {
  slideIndex = event.target.alt;
  displayIMG(slideIndex);
});
