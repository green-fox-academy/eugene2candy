'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

function delay(content, time) {
  setTimeout(() => {
    console.log(content);
  }, time);
}

delay('apple', 0);
delay('pear', 1000);
delay('melon', 3000);
delay('grapes', 5000);
