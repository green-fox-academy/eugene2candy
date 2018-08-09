'use strict';

function callback(params) {
  // console.log(params.data[0].embed_url);
  console.log(params.response.docs);
  for (let i = 0; i < 10; i++) {
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.textContent = params.response.docs[i].headline.main;
    li2.textContent = params.response.docs[i].snippet;
    li3.textContent = params.response.docs[i].pub_date;
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    document.body.appendChild(ul);
  }
}

const btn = document.querySelector('button');
btn.onclick = () => {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const responseObject = JSON.parse(httpRequest.response);
    callback(responseObject);
  };
  httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=a1d63d6623f24e1a870681ff02524576&q=moon+landing+by+Apollo+11');
  httpRequest.send();
};
