const div1 = document.getElementById("div1");
console.log(div1);

//tag 내부 내용 변경
// innerHTML: 태그 사용 가능
// innerText, textContent : 태그가 문자 그대로 노출
div1.innerHTML = "여기는 <b>첫번째<b> 태그 입니다."; //<b> 인식 됨
div1.innerText = "여기는 <b>첫번째<b> 태그 입니다."; //text 그대로 출력
div1.textContent = "여기는 <b>첫번째<b> 태그 입니다."; // text 그대로 출력

// 속성 변경
// setAttribute(속성명, 변경할 속성 값) -> 속성 값 설정
const naver = document.getElementById("naver");
naver.setAttribute("href", "https://github.com/");

const pooh = document.getElementById("pooh");
pooh.setAttribute("src", "./img/zg.jpg");

// 속성 가져오기
// getAttribute(속성명) -> 속성 값 얻기
console.log(document.getElementById("pooh").getAttribute("src"));
// 속성 접근 (.) 연산자로도 가능
console.log(document.getElementById("pooh").src);
console.log(document.getElementById("naver").href);

// . 연산자로 속성에 접근하고 할당 연산자 (=)로 속성 값 변경 가능
document.getElementById("naver").href = "#";
console.log(document.getElementById("naver").href);

// CSS 지정
const h1 = document.querySelector("h1");
const list = document.querySelectorAll("ul > li"); //유사배열

// 1. style 속성
// style. 속성 이용해 css 지정 가능
// 속성 camelCase로 쓰기
// list[0].style.backgroundColor = "purple";
// list[0].style.color = "white";
for (let li of list) {
  li.style.backgroundColor = "purple";
  li.style.color = "white";
}

// CSS 지정 2. classList 활용
// xxx.classList.add
// xxx.classList.remove
// xxx.classList.contains: 있는지 없는지 확인 (t/f)
// xxx.classList.toggle: 있으면 제거, 없으면 추가

// h1.classList.add('add-h1');
// h1.classList.remove('add-h1');
// console.log(h1.classList.contains('add-h1'));
// if (h1.classList.contains('add-h1')) {
//   h1.innerText = '하하하 add-h1 클래스가 있지요!';
// } else {
//   h1.innerText = '하하하 add-h1 클래스가 없지요ㅜㅜ';
// }
h1.classList.toggle("add-h1");

//요소 찾기
// 계층 구조(형제, 자식, 부모, 조상, 자손)
const friends = document.querySelector("#friends");
const tigger = document.querySelector("#tigger");

// 1. 자식 요소
console.log(friends.children); //유사 배열, 자식 모두 선택
console.log(friends.children[0]);
//인덱싱 + 반복문 역시 가능

// 2. 부모 요소
console.log(tigger.parentNode);

// 3. 형제 요소
console.log(tigger.previousElementSibling);
console.log(tigger.nextElementSibling);

//Method Chaining 가능
console.log(tigger.nextElementSibling.nextElementSibling);
console.log(tigger.parentElement.parentElement);

//요소 생성, 추가, 삭제
const container = document.querySelector(".container");

// 새로운 요소 생성
const p = document.createElement("p"); //요소 생성
//js로 <p></p> 태그 만듦
console.log(p); //<p></p>
p.innerText = "새로 추가 된 p 요소입니다.";
p.style.color = "pink";
p.style.backgroundColor = "navy";

// 새로 만든 요소를 추가해보자!
// x.append(y) : x요소의 맨 마지막 자식으로 y 요소 추가
// x.appendChild(y) : 한 번에 하나만 추가 가능 != append

container.append(p);

const p2 = document.createElement("p"); //요소 생성
p2.innerHTML = "p2";

const p3 = document.createElement("p"); //요소 생성
p3.innerHTML = "p3";
p2.classList.add("p-2");
p3.classList.add("p-3");
container.append(p2, p3);

// x.prepend(y): x요소의 맨 처음 자식으로 y 요소가 추가
const li1 = document.createElement("li");
li1.textContent = "캉가";
friends.prepend(li1);
const li0 = document.createElement("li");
li0.innerHTML = "<b>친구들을 소개합니다</b>";
friends.prepend(li0);

// 요소 삭제
// x.remove(): x 요소 삭제
// x.removeChild(y) : x의 자식요소인 y가 삭제
const firstLi = document.querySelector("li");
console.log(firstLi); // 친구들을 소개합니다 li 태그

const ul = firstLi.parentNode; // ul 태그
ul.removeChild(firstLi);

// firstLi.remove();
