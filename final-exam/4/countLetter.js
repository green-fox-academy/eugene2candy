function countLetter(str) {
  let count = 0;
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const array = alphabet.split('');
  for (let i = 0; i < str.length; i++) {
    if (array.indexOf(str[i]) > -1) {
      count += 1;
    }
  }
  return count;
}
console.log(countLetter('duck'));
