////////// Promise로 바꾸기
function call(name, cb) {
  setTimeout(function () {
    console.log(name);
    cb(name);
  }, 1000);
}
function back(cb) {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}
function hell(cb) {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}

call("kim", function (name) {
  console.log(name + "반가워");
  back(function (txt) {
    console.log(txt + "를 실행했구나");
    hell(function (msg) {
      console.log("여기는" + msg);
    });
  });
});

////////// Promise로 바꾸기
function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      // console.log(name);
      res(name);
    }, 1000);
  });
}
function back() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      // console.log("back");
      res("back");
    }, 1000);
  });
}
function hell() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      // console.log("callback Hell");
      res("callback Hell");
    }, 1000);
  });
}
call("Kang")
  .then(function (result) {
    console.log(result + "반가워");
    return back(result);
  })
  .then(function (result) {
    console.log(result + "를 실행했구나");
    return hell(result);
  })
  .then(function (result) {
    console.log("여기는" + result);
    return result;
  })
  .catch(function (error) {
    console.log(error);
  });
