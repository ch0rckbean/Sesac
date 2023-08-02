//val() -value
function getValue() {
  // js
  //   const inputVal = document.querySelector("input").value;
  //   alert(inputVal);
  // jQuery
  const value = $("input").val;
  alert(value);
}
function setValue() {
  // js
  //   document.querySelector("input").value = "하잉~~~";
  // jQuery
  $("input").val("하잉~~~~~");
}

// css()
function changeCssJS() {
  const span = document.querySelector("span");
  //1개만 선택했기에 맨 첫 span 요소에만 적용 != jquery
  span.style = "font-size: 20px ; color: red";
}
function changeCssJquery() {
  // case 1. css 속성 한 개씩 적용
  //   $("span").css("font-size", "40px");
  //   $("span").css("color", "blue");

  // case 2. css 여러 속성 한번에 적용 : 객체 사용 , camelCase
  $("span").css({
    //jQuery는 속성 여러개여도 한번에 적용 != JS
    fontSize: "40px",
    color: "blue",
  });
}
// css 정보 얻기
function getCssJquery() {
  console.log($("span").css("color"));
}

// attr()
function changeAttrJS() {
  //퀴즈: a 태그 선택, href 속성 값 => naver주소 변경
  const a = document.querySelector("a");
  a.setAttribute("href", "https://www.naver.com/");
}
function changeAttrJquery() {
  $("a").attr("href", "https://www.daum.net");
}

// text()
function changeTextJS() {
  // 퀴즈: p-text 클래스를 갖는 요소 선택하고, 요소의 텍스트를 임의의 값으로 변경
  const pTxt = document.querySelector(".p-text");
  p.innerText = "임의의 텍스트입니다.";
}
function changeTextJquery() {
  $(".p-text").text("임의의 텍스트에용");
}

// html()
function changeHtmlJS() {
  // 퀴즈: p-html 클래스 갖는 요소 선택하고, <h3>javascript</h3>로 변경
  const pHtml = document.querySelector(".p-html");
  pHtml.innerHTML = "<h3>javascript</h3>";
}
function changeHtmlJquery() {
  $(".p-html").html("<h3>jQuery</h3>");
}

// 요소 추가하기
// append()
function appendJS() {
  // 1. color 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '마지막 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "맨 마지막 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  const apdJS = document.querySelector(".colors");
  const li = document.createElement("li");
  li.innerText = "마지막 자식으로 추가된 js";
  apdJS.appendChild(li);
  //   apdJS.append(li);
}

function appendJquery() {
  //   $(".colors").append("마지막 자식으로 추가된 jQuery");
  $(".colors").append("<li>마지막 자식으로 추가된 jQuery</li>");
}

// prepend()
function prependJS() {
  // 1. colors 클래스 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 '첫 자식으로 추가된 js' 추가
  // 4. color 클래스를 갖는 요소에 "가장 첫 자식"으로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
  const ppdJS = document.querySelector(".colors");
  const li2 = document.createElement("li");
  //   console.log(li2);
  li2.innerText = "첫 자식으로 추가된 js";
  ppdJS.prepend(li2);
}

function prependJquery() {
  //   const li = html("<li>ddd</li>");
  $(".colors").prepend("<li>첫 자식으로 추가된 jQuery</li>");
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
  const green = document.querySelector(".green");
  const li = document.createElement("li");
  li.innerText = "green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)";
  green.before(li);
}

function beforeJquery() {
  $(".green").before(
    "<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(jQuery)</li>"
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  // 2. li 태그 요소를 생성한 후
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  const green = document.querySelector(".green");
  const li = document.createElement("li");
  li.innerText = "green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)";
  green.after(li);
}

function afterJquery() {
  $(".green").after(
    "<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(jQuery)</li>"
  );
}

// remove()
function removeJS() {
  //li 요소 선택해 삭제
  //힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
  const li2 = document.querySelector("#li2");
  li2.remove();
}

function removeJQuery() {
  $("#li2").remove();
}

// empty()
function emptyJS() {
  // js에는 empty 멧서드가 없으므로
  // ul 태그이자 num 클래스를 갖는 요소를 선택 후,
  // 해당 요소의 html 을 "" 로 설정

  //   const ulNum = document.querySelector(".nums");
  const ulNum = document.querySelector("ul.nums");
  ulNum.innerHTML = "";
}

function emptyJquery() {
  $(".nums").empty();
}

// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  const ch2 = document.querySelector(".child2");
  console.log(ch2.parentElement);
  //   console.log($(".child2").findParent());
  console.log($(".child2").parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($(".child2").parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  const ch2 = document.querySelector(".child2");
  console.log(ch2.nextElementSibling);
  console.log($(".child2").next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  const ch2 = document.querySelector(".child2");
  console.log(ch2.previousElementSibling);
  console.log($(".child2").prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  const prt = document.querySelector(".parent");
  console.log(prt.childNodes);
  console.log($(".parent").children());
}

// 클래스 조작하기
function addClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
  const hi = document.getElementById("hi");
  hi.classList.add("fs-50");
  $(".hi").addClass("fs-50");
}

function removeClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
  const hi = document.getElementById("hi");
  hi.classList.remove("fs-50");
  $(".hi").removeClass("fs-50");
}

function hasClass() {
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
  const hi = document.getElementById("hi");
  console.log(hi.classList.contains("fs-50"));
  $(".hi").hasClass("fs-50");
}

function toggleClass() {
  // hi 아이디 갖는 요소 선택하여 "bg-pink" 클래스 토글 (있으면 삭제, 없으면 추가)
  const hi = document.getElementById("hi");
  hi.classList.toggle("bg-pink");
  $(".hi").toggleClass("bg-pink");
}
