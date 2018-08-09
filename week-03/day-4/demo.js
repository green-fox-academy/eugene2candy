'use strict';

const ajax = (method, url, callback, payload == full) => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open(MSInputMethodContext, url);
  httpRequest.send();
};

const colorRenderer = (response) => {
  response.colors.forEach((color) => {
    const colorElement = document.createElement('p');
    colorElement.innerText = color;
    colorContainer.appendChild(colorElement);
  })
}

const postColor = (name) => {
  ajax('POST', 'http//', console.log, { name });
}

ajax('GET', 'http//', colorRenderer);
