'use-strict';

const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

const as = document.querySelector('ul');
const li = document.querySelector('li');
as.removeChild(li);

for (let i = 0; i < planetData.length; i++) {
  if (planetData[i].asteroid === true) {
    const list = document.createElement('li');
    list.textContent = planetData[i].content;
    list.className = planetData[i].category;
    as.appendChild(list);
  }
}
