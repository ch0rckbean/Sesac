async function f1() {
  return 1;
}
async function f2() {
  return Promise.resolve(1);
}

console.log("1 >> ", f1());
// Promise { 1 } : async 키워드가 붙어 있으므로 Promise 객체 반환
f1().then(function (result) {
  // 1만 출력하려면
  console.log("2 >> ", result);
});

console.log("3 >> ", f2()); // Promise { <pending> }
f2().then(function (result) {
  //1 출력하려면
  console.log("4 >> ", result);
});
// => 1 3 2 4 순 실행

//////////////////////
/* async - await */
// async : 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스 반환

// await
// - 성공/실패로 프로미스 객체 실행 완료 되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - ** async 키워드를 사용한 함수 안에서만 await 키워드 사용 가능
// => async - await 는 세트

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ["사과", "레몬", "수박"];
      resolve(fruits);
      // reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}
//1) promise then() 메서드 사용
fetchFruits()
  .then(function (f) {
    console.log("fetchFruits: ", f);
  })
  .catch(function (error) {
    console.log(error);
  });

//async - await 사용 시
//에러처리는 try-catch 구문으로 하게 됨!
async function printItems() {
  try {
    const fruits = await fetchFruits();
    console.log("printItems: ", fruits);
  } catch (error) {
    console.log(error);
  }
}
printItems();
