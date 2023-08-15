function promise1(flag) {
  return new Promise(function (res, res) {
    if (flag) {
      res("Good");
    } else {
      rej("Bad");
    }
  });
}
