const btn = document.querySelector('button');
const url = 'http://api.icndb.com/jokes/random';
const container = document.querySelector('.container');

function fetchAPI(param) {
  return fetch(param)
    .then(response => response.json());
}

function createDIV(params) {
  const div = document.createElement('div');
  div.textContent = params;
  container.appendChild(div);
}

function promise(x) {
  return new Promise((resolve, reject) => {
    fetchAPI(x)
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
}

async function f1() {
  const x = await promise(url);
  createDIV(x.value.joke);
}

btn.addEventListener('click', () => {
  f1();
});
