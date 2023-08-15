function goMart() {
  console.log("마트가서 고민");
}
function pickDrink(callback) {
  setTimeout(function () {
    console.log("고민 끝!");
    product = "리치에이드";
    price = 2000;
    callback(product, price);
  }, 2000);
}
function pay(product, price) {
  console.log(`제품 ${product}, 가격 ${price}`);
}
let product, price;
goMart();
pickDrink(pay);
// pay();

////////////// Promise
function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}
function pickDrink() {
  return new Promise(function (res, rej) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "리치리치";
      price = 1000;
    }, 1000);
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
exec();
