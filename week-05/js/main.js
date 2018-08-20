const url = 'https://mellow-sugar.glitch.me';
const btnGet = document.querySelector('.get-text');
const btnSubmit = document.querySelector('.submit-result');

function ajax(method, endpoint, data, callback) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url + endpoint, true);
  httpRequest.setRequestHeader('Content-type', 'application/json');
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send(JSON.stringify(data));
  httpRequest.onreadystatechange = () => {
    if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
      callback(JSON.parse(httpRequest.responseText));
    } if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 204) {
      callback((document.querySelector('p').innerText = 'OK') && document.querySelector('p').setAttribute('style', 'color: green'));
    } if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 400) {
      callback((document.querySelector('p').innerText = 'WRONG') && document.querySelector('p').setAttribute('style', 'color: red'));
    }
  };
}

function removeSpace(params) {
  const arr = params.split(' ');
  const arrremove = [];
  arr.forEach((e) => {
    if (e !== '') {
      arrremove.push(e);
    }
  });
  const arrr = arrremove.join(' ');
  // console.log(arrr);
  return arrr;
}

btnGet.addEventListener(('click'), () => {
  ajax('GET', '/text', null, (data) => {
    document.querySelector('.tmp').innerText = data.id;
    document.querySelector('.maincontent').innerText = removeSpace(data.text);
  });
});

btnSubmit.addEventListener(('click'), () => {
  ajax('POST',
    '/text',
    {
      "id": parseInt(document.querySelector('.tmp').value),
      "text": document.querySelector('.maincontent').value
    },
    () => {

    });
});
