'use strict';

let slideIndex = 3;

function displayIMG(n) {
  const x = document.getElementsByClassName('slide');
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

const last = () => {
  displayIMG(slideIndex += -1);
};

const next = () => {
  displayIMG(slideIndex += 1);
};

function currentIMG(n) {
  displayIMG(slideIndex = n);
}

const btnleft = document.getElementById('b1');
const btnright = document.getElementById('b2');

btnleft.addEventListener('click', last);
btnright.addEventListener('click', next);

document.getElementById('buttonclick').addEventListener('click', event => currentIMG(event.target.alt));

displayIMG(slideIndex);
