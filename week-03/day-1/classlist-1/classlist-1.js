'use-strict';

const p = document.querySelectorAll('p');

if (p[3].className === 'dolphin') {
  p[0].innerText = 'peer';
}

if (p[0].className === 'apple') {
  p[2].innerText = 'dog';
}

p[0].classList.add('red');

p[1].classList.remove('balloon');
