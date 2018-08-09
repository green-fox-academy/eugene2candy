'use strict';

function callback(params) {
  console.log(params);
}

const btn = document.querySelector('button');
btn.onclick = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + document.getElementById('q').value);
  httpRequest.setRequestHeader('X-Mashape-Key', 'rNJBkcJcg9mshw8MqmBKMrX1t99Gp1kHPPsjsndq1zOnQnS7fk');
  httpRequest.setRequestHeader('Accept', 'application/json');
  httpRequest.send();
};
