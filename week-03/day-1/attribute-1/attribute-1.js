'use-strict';

const img = document.querySelector('img');
console.log(img.src);

img.src = 'https://img3.jiemian.com/101/original/20170611/149717643658551500_a580x330.jpg';

const link = document.querySelector('a');
link.href = 'https://www.greenfoxacademy.com/';

document.querySelector('.this-one').setAttribute('disabled', 'true');

document.querySelector('.this-one').innerText = 'Don\'t click me!';
