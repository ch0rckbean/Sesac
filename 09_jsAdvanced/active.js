//구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당 시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["a", "b", "c"];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [A, B, C] = arr2;
console.log(A, B, C);

let x = 1;
let y = 3;
console.log("Swap 전", x, y);
//Swap
[x, y] = [y, x];
console.log("Swap 후", x, y);

const lists = ["grape", "kiwi"];
[f1, f2, f3 = "orange"] = lists;
// console.log(f1,f2,f3) //undefined
console.log(f1, f2, f3);

//2. 객체 구조 분해 할당
// - 변수 선언 순서 중요 x
// - 키 값과 변수명 일치해야 함
const obj = {
  title: "엘리멘탈",
  content: "감동적이에요",
  score: 1000000,
};

//객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.score);
console.log(obj["title"], obj["content"], obj["score"]);

//객체 구조 분해 쓰고 싶다면
//key가 존재 x 때를 대비해'='연산자 사용하면 default값 할당
const { score, title, content, star = "별 다섯개" } = obj;
console.log(title, content, score, star);

//콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다.
const { title: t2, score: s2, content: c2 } = obj;
console.log(t2, c2, s2);

//퀴즈1
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part}개발을 공부합니다. 수업의 리더는 ${leader}입니다.`;
  return output;
}

const lectureInfo = {
  name: "SESAC x CODINGOn",
  part: "WEB",
  leader: "Sean",
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
///////////////////////
//spread 연산자
//반복 가능한 객체에 대해 단일 요소로 압축을 해제하는 역할

//speread in arr
const a = [1, 2, 3];
const b = [5, 4];
console.log(...a, ...b);

//spread in string
const c = [..."Hello"]; //[ 'H', 'e', 'l', 'l', 'o' ]
const d = "Hello".split(""); //[ 'H', 'e', 'l', 'l', 'o' ]
const e = "Hello".split(" "); //[ 'Hello' ]
console.log(c);
console.log(d);
console.log(e);

//spreadinobject
const chip = {
  base: "chip",
  company: "mola",
};
const potatoChip = {
  //   base: "chip",
  //   company: "mola",
  ...chip,
  flavor: "potato",
};
const chocoChip = {
  //   base: "chip",
  //   company: "mola",
  ...chip,
  flavor: "choco",
};
console.log(chip);
console.log(potatoChip);
console.log(chocoChip);

//퀴즈 : 두 문자열 합쳐서 배열로 만들기
const world1 = "abc";
const world2 = "xyz";
const res = [...world1, ...world2];
console.log(res);

const vals = [10, 20, 30, 40, 50, 60, 100];
function get(a, b, ...rest) {
  //rest는 항상 마지막에 있어야 함
  console.log("a: ", a); //10
  console.log("b: ", b); //20
  console.log("rest: ", rest); // [30,40,50,60,100]
}
get(...vals);

//2. 객체에서 rest
const iceCream = {
  company: "haetae",
  flavor: "yogurt",
  price: 1000,
};
const { flavor, ...rest } = iceCream;
console.log(flavor); //yogurt
console.log(rest); //{ company: 'haetae', price: 1000 }

//3. 배열에서 rest
const num = [1, 2, 3, 4, 5, 6, 9];
const [one1, two1, ...rest2] = num;
console.log(one1, two1, rest2); //1 2 [ 3, 4, 5, 6, 9 ]
