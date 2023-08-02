console.log(document);
console.log($(document));

// 1. Load Event
//JS
document.addEventListener("DOMContentLoaded", function () {
  console.log("문서의 dom 트리가 완성되면 실행되는 이벤트");
});

//jQuery
$(document).ready(function () {
  console.log("ready - 문서 dom 트리가 완성되면 실행되는 이벤트");
});
$(function () {
  console.log("안녕");
});

// 2. Mouse Event
$(".p-msg").click(function () {
  $(".p-msg").css("color", "lime");
});
$(".num").click(function () {
  //   $(".num").css("color", "hotpink");  //전체 적용
  $(this).css("color", "hotpink"); // : 자기 자신 = 이벤트 적용 된 요소
});

$(".num").on("click", function () {
  $(this).css("color", "hotpink");
});

//js
const nums = document.querySelectorAll(".num");
for (let num of nums) {
  num.addEventListener("click", function () {
    console.log(this); //자기 자신 == 현재 클릭된 요소
    this.style.color = "navy";
  });
}

// mouseover(): 요소에 마우스를 올렸을 때
// $('.numbers').mouseover(function () {
//   $(this).css('background-color', 'skyblue');
//   $(this).append('<div>handler for .on() called!!</div>');
// });

$(".numbers").on("mouseover", function () {
  $(this).css("background-color", "salmon");
  //   $(this).append("<div>handler for .on() called!!</div>");
});

// hover(): 마우스 올리고/땠을 때
// mouseover +mouseout

// $(".div-hover").hover(
//   function () {
//     $(this).addClass("hover");
//   },
//   function () {
//     $(this).removeClass("hover");
//   }
// );
// ==
$(".div-hover").hover(function () {
  $(this).toggleClass("hover");
});

//scroll()
// window 창 스크롤 할 때
//jQuery
// $(window).scroll(function () {
//   console.log("scrolling!");
// });
// // ==
// // $(window).on("scroll", function () {
// //   console.log("scrolling!");
// // });
// //js
// window.addEventListener("scroll", function () {
//   console.log("scroll js");
// });

// 3. Key Event
$(".input-key").on("keydown", function (e) {
  // e: 이벤트 객체
  console.log(e);
  console.log(e.code); // 눌려진 키의 고유 코드
  console.log(e.key); // input에 입력된 값

  if (e.code === "ArrowUp") {
    console.log("⬆");
  } else if (e.code === "ArrowDown") {
    console.log("⬇");
  } else {
    console.log("others");
  }
});

// 4. Form Event
$("#todo-form").on("submit", function (e) {
  console.log(e); //이벤트 객체
  e.preventDefault(); //이벤트 기본 동작 막는 메서드
  // 지금 발생한 이벤트가 submit 이기 때문에 submit 이벤트의 기본 동작인 '새로고침' 막음

  // 입력 값 submit 시 밑에 추가 하기
  const todo = $('[name = "todo"]');
  //   밖에 '' 썼으면 안엔 "" 써야 에러가 안 남.
  //   마찬가지로  안에 '' 썼으면 밖엔 "" 써야 에러가 안 남
  const todos = $(".todos");
  todos.append(`<li>${todo.val()}</li>`);
  console.log(typeof todo.val()); // string
  todo.val("");
});

// e.preventDefault() 또 다른 예제
$("a#inactive").on("click", function (e) {
  e.preventDefault(); // a 태그의 기본 동작 막음
  //a 태그의 클릭이벤트에 대한 기본 동작 == href 링크로의 이동
  $("#text").append("이 링크는 동작하지 않음!");
});

//this
// 그 함수가 속해 있던 객체 참조
// - 뭔가를 클릭할 때 불러오는 함수(콜백함수)에서 this는 그 "무언가"를 의미
const btns = document.querySelectorAll(".btn");
const spans = document.querySelectorAll(".span");

function setBgColor() {
  this.style.backgroundColor = "pink";
}
function setBgColor2(ele, color) {
  ele.style.backgroundColor = color;
}

for (let btn of btns) {
  //   btn.addEventListener("click", function () {
  //     console.log(this)
  //     this.style.backgroundColor = "pink"
  //   })
  btn.addEventListener("click", setBgColor);
}

for (let span of spans) {
  // span.addEventListener("click", function () {
  //     console.log(this);
  //     this.style.backgroundColor = "pink";
  // });
  span.addEventListener("click", function () {
    //방식이 다름
    setBgColor2(this, "purple");
  });
}
