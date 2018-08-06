'use-strict';

const list = ['bread', 'milk', 'orange', 'tomato'];
const ulleft = document.createElement('col');
const ulright = document.createElement('col');
const ulbuttons = document.createElement('col');
const trow = document.createElement('tr');
const table = document.createElement('table');
document.body.appendChild(table);
table.appendChild(trow);
trow.appendChild(ulleft);
trow.appendChild(ulbuttons);
trow.appendChild(ulright);

for (let i = 0; i < list.length; i++) {
  const td = document.createElement('td');
  td.textContent = list[i];
  ulleft.appendChild(td);
}

const up = document.createElement('button');
const bigger = document.createElement('button');
const x = document.createElement('button');
const down = document.createElement('button');

