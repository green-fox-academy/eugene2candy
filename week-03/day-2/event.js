'use strict';

// load = everything is rendered.
window.addEventListener('load', () => {
  const myButton = document.querySelector('button');
  console.log(myButton);
});

window.addEventListener('load', () => {
  const myButton = document.querySelector('button');
  myButton.addEventListener('click', () => {
    console.log('clicked');
  });
});
