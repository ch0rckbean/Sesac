// 함수 :특정 작업 수행 위해 독립적으로 설계된 코드 집합
// 입력 -> 함수 -> return -> 출력
// 동일한 작업을 반복
// 1) 반복 작업 줄임
// 2) 코드 재사용성 높임
// 3) 유지보수 편리

// 1. 내장 함수: 이미 언어에서 자주 쓰는 기능을 만들어 놓은 함수
// 2. 사용자 정의 함수: 개발자가 자주 쓰이는 기능을 커스터마이징하여 만든 함수

// 함수 정의: 함수 생성
// 함수 호출: 함수 사용

// 1. 명시적 함수 선언
function helloWorld() {
  //return 생략 가능
  console.log("Hello World1");
}
function helloWorld2() {
  return "Hello World2";
}

// return (반환값)
//  - 함수 내부(body, block) 코드의 최종 결과값
//  - 최종 결과값 저장, 보관
//  - return 키워드 만나면 함수실행 중단

// 함수 호출
helloWorld();
console.log(helloWorld2());

// 2. 함수 표현식: 함수 선언 후 변수에 저장
const helloWorld3 = function () {
  console.log("hello world3");
};
const helloWorld4 = function () {
  return "hello world4";
};

helloWorld3();
console.log(helloWorld4());

///////////////////////////////////////////////////
// 매개변수가 있는 함수는?!
function hello1(txt) {
  console.log(`${txt}`);
}
hello1("배고팡");

function hello2(txt, name) {
  return `${txt} ${name}`;
}
console.log(hello2("배고파", "푸바옹"));
console.log(hello2("동바오", "생바오동"));

function hello3(txt, name) {
  console.log(`${txt}${name}`);
}
hello3("대나무", "대나무");

// 3. 화살표 함수 : 함수 선언 더 간단하게 가능
// body{} 내에서 return 구문만 있을 때 생략 가능
// 코드 길어지면 return 명시해야
const myfFunc1 = (x) => x;
const mySum = (a, b) => a + b;

console.log(mySum(5, 7));
const myMultiply = (a, b) => {
  let res = a * b;
  return res;
};
console.log(myMultiply(3, 8));

//호이스팅: 함수, 변수 둘 다
//  - 함수에서는 함수 선언문이 호이스팅 대상이 됨
//  - 코드 실행 전에 변수/함수 선언을 최상단으로 끌어올리는 현상
//  - var만 유일하게 호이스팅 대상
// myHello(); //함수 선언보다 호출 먼저 함
function myHello() {
  console.log("Hello");
}

//함수 표현식 : 호이스팅 대상 x
//   - ReferenceError
// myHello2();
const myHello2 = function () {
  console.log("hello22");
};

function multiply(a, b) {
  return a * b;
}

function square(n) {
  console.log(n ** 2);
}
square(4);
