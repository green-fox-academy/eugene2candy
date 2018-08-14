function resolved() {
  console.log('Resolved');
}

function rejected() {
  console.log(new Error('failjeldgkjdlfd'));
}
Promise.reject()
  .then(resolved())
  .catch(rejected())
  .then(resolved, rejected);
