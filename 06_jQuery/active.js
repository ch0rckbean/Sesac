// jQuery
// $(선택자).동작함수()
// $(): html 요소를 선택하는 함수
// 동작함수: 선택된 요소에 대해 원하는 동작 수행

console.log($("#div1"));

function submitJs() {
  const div1 = document.getElementById("div1");
  //   div 내용 변경
  div1.innerText = "반갑습니다.";

  //div border style 추가
  div1.setAttribute("style", "border: 2px solid pink");
}

function submitJquery() {
  const div1 = $("#div1"); //요소 선택 및 변수 선언
  div1.text("안녕히계세요~~");
  div1.css("border", "2px dotted blue");
}

const jellyJs = document.querySelectorAll(".jelly");
const jellyJquery = $(".jelly");
console.log(jellyJs); //nodeList
console.log(jellyJquery); //jQuery 객체

// jellyJs.addEventLister("click", changeLi);
// li 태그들이 아닌 노드 리스트가 잡히므로 typerror
// 유사 객체에 이벤트 리스너 추가하려 했기 때문 => 반복문 사용

// script에 defer 추가하기 || body 끝 줄에 두기
jellyJs.forEach((jelly) => {
  jelly.addEventListener("click", function () {
    this.style.color = "red";
  });
});

jellyJquery.on("click", function () {
  //   console.log($(this));
  $(this).css("background-color", "skyblue");
});
