const btn = document.querySelector('button');
const url = 'http://52.29.105.35:3000';

function ajax(method, endpoint, data, cb) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url + endpoint, true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');

  httpRequest.send(JSON.stringify(data));
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      cb(JSON.parse(httpRequest.responseText));
    }
  };
}

btn.onclick = (event) => {
  event.preventDefault();
  ajax('POST', '/posts', {
    url: document.querySelector('.url').value,
    title: document.querySelector('.title').value,
  }, () => {
    window.location.href = './index.html';
  });
};
