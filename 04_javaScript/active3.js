// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2;
console.log(q1);
//  3: 연산만 하고 대입을 안 함

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5;
q2 = q2 - 2;
console.log(q2);
// 13 : 연산이 돼서

// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1;
//에러가 난다 : const로 선언하면 상수라 변경이 되지 않는다.

// 6. 배열
const fruits = ["orange", "pineapple", "grape", "apple"];
// const fruits2=new Array("orange", "pineapple", "grape", "apple");
console.log(fruits[0]);

// 배열 원소 데이터타입 달라도 됨
const data = [1, "apple", false, null, undefined];
// 배열 내 배열 들어갈 수 있음(중첩 가능) =>n차원 배열
const korean = [
  ["가", "나", "다"],
  ["라", "마", "바"],
  ["사", "아", "자"],
];
// [퀴즈] 2차원 배열 '가자' 글씨 출력
console.log(korean[0][0] + korean[2][2]);
const nums = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

// [퀴즈] 3차원 배열 숫자 8 출력하기
console.log(nums[1][0][1]);

// 7. object(key:value)
const cat = {
  name: "야옹이",
  age: 1,
  isCute: true,
  mew: () => {
    return "야옹애옹";
  },
};
console.log(cat); //object 자체 출력

//object의 속성(key)에 접근하는 방법
// 1) 점 표기법
console.log(cat.name);
console.log(cat.age);
console.log(cat.mew()); //함수 호출 시 괄호 붙이기
// 2) 대괄호 표기법
console.log(cat["name"]);
// 점 표기법으로 못 쓸 때 사용
// key가 변수에 저장되어 있을 때 주로 사용
const tmpVal = "name";
console.log(cat["name"]);

//typeof : 자료형 확인 키워드.
// 괄호 유무 상관 없음
// console에서 파랑 : 숫자, 검정: 문자

console.log(typeof "aa");
console.log(typeof 2);
console.log(typeof true);
console.log(typeof null); //object ** : js 공식 인정 언어 자체 오류 ㅋㅋ빠보
console.log(typeof undefined); //undefined
console.log(typeof fruits); // 배열: object
console.log(typeof cat); // object

const myFavorite = {
  food: "jelly",
  animal: "cat",
  sweet: () => {
    return "all";
  },
};
console.log(myFavorite);

//형변환
//성적 평균 구하는 프로그램
// let mathScore = prompt("수학점수 입력");
// let engScore = prompt("영어점수 입력");
// let avg = (mathScore + engScore) / 2;
// console.log(`수학과 영어의 평균 점수는 ${avg}입니다.`);

//형변환 1. String(): 문자로 형변환
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1), typeof String(str1));
console.log(String(str2), typeof String(str2));
console.log(String(str3), typeof String(str3));
console.log(str1.toString(), typeof str1.toString());

//2. Number(): 숫자로 형변환
let n1 = true;
let n2 = false;
let n3 = "123.9";

console.log(Number(n1), typeof Number(n1));
console.log(Number(n2), typeof Number(n2));
console.log(Number(n3), typeof Number(n3));
console.log(parseInt(n3, 10)); //== 10진수 정수로 바꾸겠다 (안정적)
console.log(parseFloat(n3));

let mathScore = "77";
let engScore = "88";
let avgScore = (Number(mathScore) + Number(engScore)) / 2;
console.log(avgScore);

console.log(Number(undefined), typeof Number(undefined)); // NaN number
console.log(Number(null), typeof Number(null)); //0 number
