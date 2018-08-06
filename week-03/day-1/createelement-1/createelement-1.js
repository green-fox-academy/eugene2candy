'use-strict';

const ul = document.querySelector('ul.asteroids');
const gf = document.createElement('li');
gf.textContent = 'The Green Fox';
ul.appendChild(gf);
const ll = document.createElement('li');
ll.textContent = 'The Lamplighter';
ul.appendChild(ll);

const cont = document.querySelector('.container');
const heading = document.createElement('h1');
heading.textContent = 'I can add elements to the DOM!';
cont.appendChild(heading);

const img = document.createElement('img');
img.src = '';
cont.appendChild(img);
