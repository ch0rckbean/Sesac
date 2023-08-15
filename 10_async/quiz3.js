// Promise => Async/Await
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

async function exec() {
  let user = await call("Kang");
  console.log(user + "반가워");
  let prc = await back();
  console.log(prc + "를 실행했구나");
  let here = await hell();
  console.log("여기는 " + here);
}
exec();
