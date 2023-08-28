//Front-End JS

// tbody 요소, button-group 요소 선택
const tbody = document.querySelector("tbody");
const btnGroup = document.querySelector("#button-group");

// form 의 [등록] 버튼 클릭 시 테이블에 방문 데이터 추가
// : 버튼 클릭 시 axios로 POST /visitor 요청 날려서 DB에 데이터 INSERT 하기
function createVisitor() {
  const form = document.forms["visitor-form"];

  axios({
    method: "post",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log("post /visitor 요청에 대한 응답 ", res);
  });
}
