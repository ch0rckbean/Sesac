function F() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const f = ["사과", "레몬", "수박"];
      console.log(f);
      res(f);
    }, 1000);
  });
}
function J() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const j = ["하리보", "트롤리"];
      console.log(j);
      res(j);
    }, 1000);
  });
}
F().then(function (j) {
  return J();
});

async function prt() {
  await F();
  await J();
}

////////////
function add(a, b) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const rst = a + b;
      res(rst);
    }, 1000);
  });
}

function sub(ab) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const rst = ab * 2;
      res(rst);
    }, 1000);
  });
}
function mul(abn) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      const rst = abn - 1;
      res(rst);
    }, 1000);
  });
}
add(3, 4)
  .then(function (rst) {
    console.log(rst);
    return sub(rst);
  })
  .then(function (rst) {
    console.log(rst);
    return mul(rst);
  })
  .then(function (rst) {
    console.log(rst);
    return rst;
  });

//////////////////////
// 1. 콜백 함수 => Promise
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

function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function here() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("내 방");
      res("내 방");
    }, 1000);
  });
}
call("Kang")
  .then(function (rst) {
    return back(rst);
  })
  .then(function (rst) {
    return here(rst);
  })
  .then(function (rst) {
    return rst;
  });

//////////////2. async/await으로 바꾸기
function call(name) {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function here() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("내 방");
      res("내 방");
    }, 1000);
  });
}
async function exec() {
  let one = await call("Kang");
  console.log(one + "안녕");
  let two = await back();
  console.log(two + "을 실행했구나");
  let thr = await here();
  console.log("여기는 " + thr);
}
exec();
