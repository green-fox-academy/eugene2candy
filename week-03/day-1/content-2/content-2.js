'use-strict';

const listitems = document.querySelectorAll('li');
const items = ['apple', 'banana', 'cat', 'dog'];
for (let i = 0; i < items.length; i++) {
  listitems[i].innerText = items[i];
}

const style = document.createElement('style');
style.innerHTML = 'ul { background-color: limegreen; }';
document.head.appendChild(style);
