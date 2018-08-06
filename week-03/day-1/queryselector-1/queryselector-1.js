'use-strict';

const king = document.getElementById('b325');
console.log(king);

const businessLamp = document.getElementsByClassName('big');
console.log(businessLamp[0]);
console.log(businessLamp[1]);

const conceitedKing = document.querySelectorAll('#b325, .b326');
alert(conceitedKing[0].textContent);
alert(conceitedKing[1].textContent);

const noBusiness = document.querySelectorAll('#b325, .b326, .b329');
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);
