console.log(document); //document 전체 구조 출력
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);
// console.log(document.domain);

//document 객체를 이용해 html 요소 선택
// 1. getElementById
console.log(document.getElementById("green"));
console.log(document.getElementById("red"));

// 2. getElementsByClassName
console.log(document.getElementsByClassName("pink")); //유사배열
console.log(document.getElementsByClassName("pink")[1]);

// 3. getElementsByTagName
console.log(document.getElementsByTagName("div"));

// 4. getElementsByName
console.log(document.getElementsByName("id"));

// 5. querySelector(css selector)
// - 처음 발견한 하나만 가지고 옴
console.log(document.querySelector(".pink"));
console.log(document.querySelector("div"));
console.log(document.querySelector('[name="id"]'));

// 6. querySelectorAll(css selector)
// - 선택자에 해당되는 모든 요소를 선택
console.log(document.querySelectorAll(".pink"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll('[name="id"]'));

console.log(document.querySelectorAll(".pink")[0]);
console.log(document.querySelectorAll(".pink")[1]);
console.log(document.querySelectorAll(".pink")[2]);
console.log(document.querySelectorAll(".pink")[3]);

// 유사배열(HTMLCollection, NodeList)
// [] 식으로 생긴 배열 의미. 배열은 아님!!
// index, length는 가짐
// 배열과 달리 사용가능한 메서드 제한

// NodeList -> forEach() 반복문 사용 가능
document.querySelectorAll(".pink").forEach((ele) => console.log(ele));

// HTMLCollection -> forEach() 메서드 사용 x
// 반복 필요 시 Array 변경: (Array.from())
// document.getElementsByClassName(".pink").forEach((ele) => console.log(ele)); //forEach is not a function
Array.from(document.getElementsByClassName(".pink")).forEach((ele) =>
  console.log(ele)
);

// for of 반복문
const pinks = document.querySelectorAll(".pink");
for (let pink of pinks) {
  console.log(pink);
}
