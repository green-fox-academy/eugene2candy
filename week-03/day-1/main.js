'use-strict';

const myElement = document.createElement('div');
document.body.appendChild(myElement);

const paragraph = document.createElement('p');
myElement.appendChild(paragraph);
paragraph.innerText = 'HelloWorld.';
paragraph.textContent = 'HelloWorld2.';
paragraph.appendChild(document.createTextNode('helloWorld3.'));
