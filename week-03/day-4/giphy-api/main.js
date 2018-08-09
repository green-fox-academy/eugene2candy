'use strict';

function callback(params) {
  // console.log(params.data[0].embed_url);
  for (let i = 0; i < 16; i++) {
    const img = document.createElement('iframe');
    img.setAttribute('src', params.data[i].embed_url);
    document.body.appendChild(img);
  }
}

const btn = document.querySelector('button');
btn.onclick = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=FJj6XrUK5mkKMoTLwonjAH15zim7K3Bf&q=' + document.getElementById('q').value + '&limit=16&offset=0&rating=G&lang=en');
  httpRequest.send();
};
