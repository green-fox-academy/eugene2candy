function resolved() {
  console.log('Resolved');
}

function rejected() {
  console.log(new Error('fail'));
}

Promise.resolve().then(resolved, rejected);
