let i = 0;
function inc() {
  console.log(i);
  i++;
  inc();
}
inc();
