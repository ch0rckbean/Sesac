function first() {
  console.log(1);
  second();
  return;
}

function second() {
  console.log(2);
  return;
}
first();
