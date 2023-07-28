// 문자열 관련 내장 메서드
let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";

// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str1[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);

// 문자열의 길이 (length는 메서드가 아닌 "속성")
console.log(str1.length);
console.log(str2.length);

// 대/소문자 변환
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

// 양끝 공백 제거
console.log(str2.trim());
console.log(str2.trim().length); // 'Strawberry Moon'.length 와 동일

// indexOf() 글자 위치 찾기
// 없으면 -1 반환하므로 문자 유무 탐지 시 사용
// 위치(index): 0부터 시작
console.log(str1.indexOf("w"));
console.log(str1.indexOf("r"));
console.log(str1.indexOf("x")); // 존재하지 않는 문자에 대해 검색하면 -1 반환

// slice() 문자열 자르기
console.log(str1.slice(11)); // 11 번 위치의 글자 ~ 끝
console.log(str1.slice(1, 5)); // start(1) ~ end-1(4)까지 자르기

// replace() 문자열 바꾸기
console.log(str1.replace("a", "x"));
console.log(str1.replace("r", "x"));
console.log(str1.replaceAll("r", "*"));

// split() 문자열 쪼개기 (배열로 변환)
let date = "23.03.10";
console.log(date.split("."));
console.log(date.split("3")); //['2', '.0', '.10']

// repeat()
console.log("hi".repeat(5));

///////////////////////////////////////
// 배열 내장 메서드
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["quokka", "rabbit", "puppy", "hamster"];

// 배열에 값 추가
// arr1[5] = 6; // arr1 배열의 5번 인덱스에 6이라는 값 추가
// arr1[2] = "44"; 기존 arr1[2] 값 삭제 됨
// arr1[8] = 100; // 인덱스 건너뛰면 빈 값(empty)이 들어가게 됨

// push(): 끝에 요소 추가
arr1.push(6);
arr1.push(10);
console.log(arr1);

// pop(): 맨 끝 요소 제거
arr1.pop();
console.log(arr1);

// unshift(): 맨 앞에 요소 추가
arr1.unshift("cat");
console.log(arr1);

// shift(): 맨 앞에 요소 제거
arr1.shift();
console.log(arr1);

// includes(요소): 요소 있는지 없는지 검사 (true, false)
console.log(arr2.includes("quokka"));
console.log(arr2.includes("apple"));

// reverse()
console.log(arr1.reverse());
console.log(arr1); // 원본 배열이 변경된 것

// join(): join 안의 문자열 기준으로 병합
console.log(arr2);
console.log(arr2.join(""));
console.log(arr2.join("-"));

console.log("hello".split("").reverse().join(""));
console.log("hello".split(""));
console.log("hello".split("").reverse()); //quokkarabbitpuppyhamster
console.log("hello".split("").reverse().join("-")); //quokka-rabbit-puppy-hamster

/////////////////////////////
//배열에서 반복문 사용하기!
//순회
// - 기본 for문
// - for of 문
// - forEach()메서드
const arr3 = [1, 2, 5, 6, 7];
const alphabets = ["a", "b", "c", "d"];

for (let a = 0; a < arr3.length; a++) {
  console.log(arr3[a]);
}

for (let alpha of alphabets) {
  console.log(alpha);
}

alphabets.forEach(function (alpha) {
  // alpha: currentValue를 의미. 반복하고 있는 현재 요소
  console.log(alpha);
});

alphabets.forEach(function (alpha, idx) {
  // alpha: currentValue를 의미. 반복하고 있는 현재 요소
  // idx: currentValue의 인덱스(위치)
  console.log(alpha, idx);
});

alphabets.forEach(function (alpha, idx, arr) {
  // alpha: currentValue를 의미. 반복하고 있는 현재 요소
  // idx: currentValue의 인덱스(위치)
  // arr: forEach를 호출한 배열
  console.log(alpha, idx, arr);
});

const nums = [1, 1, 22, 15, 33];
let sum = 0;
let sum2 = 0;
let sum3 = 0;

for (let num of nums) {
  sum += num;
  console.log(sum);
}

nums.forEach(function (cur, idx, arr) {
  sum2 += cur;
  console.log(sum2, idx, arr);
});

nums.forEach((num) => {
  sum3 += num;
  console.log(sum3);
});

console.log("----------------------");
//map, filter, find 메서드
const arr4 = [1, 2, 3, 4, 5, 6];

//map(): 새로운 배열 반환 !=forEach
// let arr4_res = arr4.map(function (a) {
//   return (a *= 2);
// });
let arr4_res = arr4.map((a) => a * 3);
console.log(`arr4_res: ${arr4_res}`);

//filter(): 주어진 함수의 테스트(조건) 통과하는 요소 모아
// (조건 통과하면 요소 유지, 미통과하면 요소 버림) "새로운 배열" 반환
let ft_res = arr4.filter((e) => e > 2);
console.log(ft_res); //3,4,5,6

//find (): 특정 조건 만족하는 첫번째 요소 반환
const findRes = arr4.find((e) => e > 2);
console.log(findRes);

//퀴즈
const words = ["dog", "cat", "rabbit", "apple", "wow"];
let res1 = words.filter((e) => e.length > 3);
console.log(res1);
let res2 = words.filter((e) => e.includes("a"));
console.log(res2);
