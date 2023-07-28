//js Event(이벤트)

// 이벤트에 함수 등록 방법
//  - HTML 상에서 on___속성으로 등록
//  - js 상에서 listener로 등록

// 1. on___속성으로 등록
function clickH1() {
  alert("제목 클릭");
}

// 2. addEventListener
const btn1 = document.querySelector(".btn--black");
const btn2 = document.querySelector(".btn--green");
const btn3 = document.querySelector(".btn--blue");
const btn4 = document.querySelector(".btn--red");
const container = document.getElementById("container");

// addEventListener(이벤트 종류, 이벤트 발생 시 일어날 일 함수로 작성)
btn1.addEventListener("click", function () {
  alert("btn1 click");
});
btn1.addEventListener("mouseover", function () {
  btn1.style.backgroundColor = "aqua";
});
btn1.addEventListener("mouseout", function () {
  btn1.style.backgroundColor = "rgb(44,44,44)";
});

btn2.addEventListener("click", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "pink";
  div.innerHTML = "HI!!!!!!";
  container.append(div);
});

btn3.addEventListener("click", changeColor);
function changeColor() {
  const divs = document.querySelectorAll("#container div");
  for (let div of divs) {
    div.style.backgroundColor = "skyblue";
  }
}

btn4.addEventListener("click", changeBtnColor);
function changeBtnColor() {
  console.log(this); //자기자신 => btn4
  //<div class="btn btn--red">버튼4</div>
  console.log(this.parentNode); // this를 이용해 부모 접근
  this.style.backgroundColor = "yellow";
  this.style.color = "###";
}

const btn = document.querySelector("button");
const input = document.querySelector("input");

// [이벤트 객체]
// 이벤트 발생 -> 브라우저는 발생한 이벤트에 대한 정보를 담은 "이벤트 객체(event object)"를 이벤트 리스터에 전달
// ex. mousedown 이벤트 발생 -> 이벤트 객체는 (마우스 좌표, 버튼 번호) 정보를 가짐
// ex. keydown 이벤트 발생 -> 이벤트 객체는 (키 코드값, 어떤 키가 눌렸는지에 대한 정보) 정보를 가짐
btn.addEventListener("click", function (event) {
  // event 객체
  console.log(event); // 이벤트 객체에 대한 정보 출력
});

input.addEventListener("keydown", function (e) {
  console.log(e.code); //눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === "ArrowUp") {
    console.log("💢");
  } else if (e.code === "ArrowDown") {
    console.log("💫");
  } else {
    console.log("others");
  }
});

// 폼 이벤트
const todoForm = document.getElementById("todo-form");
const todos = document.querySelector(".todos");

todoForm.addEventListener("submit", (e) => {
  console.log("submit");
  e.preventDefault(); //폼 submit 이벤트가 새로고침 되는 걸 막음
  // 폼 제출 막음

  const todoInput = document.querySelector('input[name="todo"]');
  //   console.log(todoInput);
  //   console.dir(todoInput);
  //   console.log(todoInput.value); // input에 입력된 값

  const newTodo = todoInput.value.trim();
  //스페이스바 연속 => 공백 방지 위해 trim()

  if (newTodo !== "") {
    //null?
    const newTodoLi = document.createElement("li"); // <li></li>
    newTodoLi.append(newTodo); // <li>input입력값</li>
    todos.append(newTodoLi);
  }
  //input창 초기화
  todoInput.value = "";
});

//change이벤트: input 요소에 변경 일어나고 다른 요소 클릭해서
// input이 포커스 아웃(blur) 처리 됐을 때 일어나는 이벤트
const chgInput = document.querySelector("#change-input");
chgInput.addEventListener("change", function () {
  console.log("change!!", e.target.value);
});

// input에 값이 입력 될 때마다 이벤트 발생
chgInput.addEventListener("input", function () {
  console.log("changing!");
  const div = document.querySelector(".intro");
  div.textContent = this.value; //실시간 텍스트 동기화
});
