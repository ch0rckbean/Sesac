//Pr1
// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 2000);
// console.log(3);

//Pr2 :편의점에 들어가서 음료수를 사고 나오는 상황
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}
function pickDrink() {
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라";
    price = 2000;
  }, 3000);
}
function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
let product;
let price;

goMart();
pickDrink();
pay();
// 마트에 가서 어떤 음료를 살지 고민한다.
// 상품명: undefined, 가격: undefined
// 고민끝!

/* 콜백함수를 이용해 비동기 처리 */
//Pr3 :편의점에 들어가서 음료수를 사고 나오는 상황
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}
function pickDrink(callback) {
  // callback 매개변수: 콜백함수 의미
  setTimeout(function () {
    console.log("고민끝!");
    product = "제로콜라";
    price = 2000;
    callback(product, price); //매개변수로 넘긴 콜백함수 실행
  }, 3000);
}
function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

// let product;
// let price;
goMart();
pickDrink(pay);

///////////////////////////////////
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민끝!");
      product = "제로콜라";
      price = 2000;
      resolve();
    }, 2000);
  });
}
function pay() {
  console.log(`상품명: ${product}, 가격: ${price}`);
}
async function exec() {
  goMart();
  await pickDrink();
  pay();
}

// let product;
// let price;
exec();
