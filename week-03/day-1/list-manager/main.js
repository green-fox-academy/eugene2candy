'use-strict';

const list = ['bread', 'milk', 'orange', 'tomato'];
const ulleft = document.createElement('select');
ulleft.setAttribute('id', 'left');
ulleft.setAttribute('size', '4');
ulleft.style.width = '80px';
const ulright = document.createElement('select');
ulright.setAttribute('size', '4');
ulright.style.width = '80px';
const ulbuttons = document.createElement('div');
document.body.appendChild(ulleft);
document.body.appendChild(ulbuttons);
document.body.appendChild(ulright);

for (let i = 0; i < list.length; i++) {
  const p = document.createElement('option');
  p.textContent = list[i];
  p.setAttribute('id', list[i]);
  ulleft.appendChild(p);
}

const up = document.createElement('button');
up.setAttribute('id', 'up');
const bigger = document.createElement('button');
bigger.setAttribute('id', 'bigger');
const x = document.createElement('button');
x.setAttribute('id', 'x');
const down = document.createElement('button');
down.setAttribute('id', 'down');
up.textContent = 'up';
bigger.textContent = '>';
x.textContent = 'X';
down.textContent = 'down';
ulbuttons.appendChild(up);
ulbuttons.appendChild(bigger);
ulbuttons.appendChild(x);
ulbuttons.appendChild(down);

document.getElementById('bigger').onclick = () => {
  const newright = document.createElement('option');
  newright.textContent = ulleft.value;
  ulright.appendChild(newright);
  document.getElementById(ulleft.value).remove();
};

document.getElementById('x').onclick = () => {
  document.getElementById(ulleft.value).remove();
};

document.getElementById('up').onclick = () => {
  const op = document.getElementById('left').options;
  if (ulleft.selectedIndex === 0) {
    const tmp = ulleft.value;
    op[0].textContent = op[1].textContent;
    op[1].textContent = op[2].textContent;
    op[2].textContent = op[3].textContent;
    op[3].textContent = tmp;
  } else {
    const tmp = ulleft.value;
    op[ulleft.selectedIndex].textContent = op[ulleft.selectedIndex - 1].textContent;
    op[ulleft.selectedIndex - 1].textContent = tmp;
  }
};

document.getElementById('down').onclick = () => {
  const op = document.getElementById('left').options;
  if (ulleft.selectedIndex === 3) {
    const tmp = ulleft.value;
    op[3].textContent = op[2].textContent;
    op[2].textContent = op[1].textContent;
    op[1].textContent = op[0].textContent;
    op[0].textContent = tmp;
  } else {
    const tmp = ulleft.value;
    op[ulleft.selectedIndex].textContent = op[ulleft.selectedIndex + 1].textContent;
    op[ulleft.selectedIndex + 1].textContent = tmp;
  }
};
