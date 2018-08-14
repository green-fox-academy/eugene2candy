const btn = document.querySelector('button');
const url = 'http://api.icndb.com/jokes/random';
const container = document.querySelector('.container');

function fetchAPI(param) {
  return fetch(param)
    .then(response => response.json())
    .then(j => j.value.joke)
    .catch(() => new Error('Cannot fetch joke'));
}

function createDIV(params) {
  const div = document.createElement('div');
  div.textContent = params;
  container.appendChild(div);
}

async function f1() {
  const x = await fetchAPI(url);
  createDIV(x);
}

btn.addEventListener('click', () => {
  f1();
});
