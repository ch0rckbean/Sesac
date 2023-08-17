////////// Promise로 바꾸기
// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }
// function back(cb) {
//   setTimeout(() => {
//     console.log("back");
//     cb("back");
//   }, 1000);
// }
// function here(cb) {
//   setTimeout(function () {
//     console.log("내 방");
//     cb("내 방");
//   });
// }
// call("Kang", function (name) {
//   console.log(name + "안녕");
//   back(function (txt) {
//     console.log(txt + "을 실행햇넴");
//     here(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

//////////실행 구문
// call("Kang", function (name) {
//   console.log(name + "안녕");
//   back(function (txt) {
//     console.log(txt + "을 실행햇넴");
//     here(function (msg) {
//       console.log("여기는" + msg);
//     });
//   });
// });

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
