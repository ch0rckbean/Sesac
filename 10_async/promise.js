//Promise(resolve, reject)
// - 비동기 함수 동기처리 위해 만든 객체
// - 미래에 실패, 성공에 대한 결과 값 약속
// - 성공, 실패 분리 반환
//      - 성공, 실패 대한 결과는 then, catch 로 이어받아 처리 가능
//  => 성공이든 실패든 무언가의 "최종 결과"
// resolved: 성공
// rejected: 실패

// 1. promise 생성 코드
function promise1(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 fulfilled! then 메서드로 연결, 이 때 flag 값은 ${flag}`
      );
    } else {
      reject(
        `현재 프로미스의 상태는 rejected! catch 메서드로 연결, 이 때 flag 값은 ${flag}`
      );
    }
  });
}
//2. promise 사용(소비) 코드
flag = true;
promise1(flag)
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

//  화살표 함수로도 가능
promise1(flag)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

/////////////////////////////
/* 실습: 
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민끝!");
      product = "제로콜라";
      price = 2000;
      //   resolve();
      if (price <= 2000) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
function noPay() {
  console.log("금액 부족 ㅠㅠ");
}

let product;
let price;
goMart();
pickDrink().then(pay).catch(noPay);
// pay();
*/

//////////////////
// 3. Promise Chaining
// 함수를 이용해 (4+3)*2-1 =13 연산해보기
// sub(mul(add(4 , 3), 2) - 1): add => mul => sub

// case1. 콜백함수로 처리한다면?
/* 
function add(n1, n2, callback) {
  setTimeout(function () {
    const result = n1 + n2;
    callback(result);
  }, 1000);
}

function mul(n, callback) {
  setTimeout(function () {
    const result = n * 2;
    callback(result);
  }, 700);
}

function sub(n, callback) {
  setTimeout(function () {
    const result = n - 1;
    callback(result);  //마지막 순서인데 왜 callback 호출?
  }, 500);
}

add(4, 3, function (x) {
  console.log("1: ", x); // 7
  mul(x, function (y) {
    console.log("2: ", y); // 14
    sub(y, function (z) {
      console.log("3: ", z); // 13
    });
  });
});
*/

// case2: Promise Chaining 적용
// - 순차적 작업 가능 + 콜백지옥 탈출
// - 예외 처리 간편
function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n * 2;
      //   resolve(result);
      reject(new Error("의도적 에러"));
      //둘 다 같이 쓰려면?
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

add(4, 3)
  .then(function (result) {
    console.log("1: ", result);
    return mul(result); //== return mul(7)
  })
  .then(function (result) {
    console.log("2: ", result);
    return sub(result); //== return sub(14)
  })
  .then(function (result) {
    console.log("3: ", result);
    return result;
  })
  .catch(function (error) {
    console.log(error);
  });
//1: 7
// Error: 의도적 에러
