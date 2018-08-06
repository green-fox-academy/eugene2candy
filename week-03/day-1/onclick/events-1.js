'use-strict';

const div = document.querySelector('div');
const button = document.querySelector('button');
const newdiv = document.createElement('div');
div.appendChild(newdiv);
button.onclick = () => {
  if (newdiv.className !== 'party') {
    newdiv.className = 'party';
  } else {
    newdiv.classList.remove('party');
  }
};
