//반복문

//for문
for (let i = 0; i < 10; i += 2) {
  console.log("마이쮸짱", i);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("-----------------");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

//1~10까지의 합
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);

//배열, for문
const fruits = ["포도", "블랙사파이어", "딸기", "샤인머스캣"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 1~20에서 짝수의 합
let sum2 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) sum2 += i;
}
console.log(sum2);

//while문
let idx = 0;
while (idx < 10) {
  console.log(idx);
  idx++;
}

let idx2 = 0;
while (true) {
  // 의도적으로 무한루프
  console.log("HIHI", idx2);
  idx2++;
  if (idx2 == 10) break;
}

//continue 를 이용해 1~100 중 홀수의 합
let sum3 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    continue; //이번 반복회차는 스킵
  }
  sum3 += i;
  console.log(i, sum3);
}
