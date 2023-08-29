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
    console.log("post /visitor 요청에 대한 응답 ", res.data);
    // 방금 추가한 정보들 보이기
    //  - newVisitor 변수에 tr 요소 생성하고, tbody의 맨 마지막 요소로 추가
    const { id, name, comment } = res.data;
    const newVisitor = `
      <tr id="tr_${id}">
      <td>${id}</td>
      <td>${name}</td>
      <td>${comment}</td>
      <td>
        <button type="button">수정</button>
      </td>
      <td>
        <button type="button" onclick="deleteVisitor(this,${id})">삭제</button>
      </td>
    </tr>`;

    //js
    tbody.insertAdjacentHTML("beforeend", newVisitor);
    // tbody.innerHTML += newVisitor;

    // jQuery
    // $("tbody").append(newVisitor);
  });
}

function deleteVisitor(obj, id) {
  console.log("obj, id ", obj, id); //버튼 요소, id
  if (!confirm("정말 삭제베리?")) {
    return;
  }
  //confirm 창에서 [확인] 누르면 visitor 데이터 삭제
  //  - axios로 DELETE /visitor 요청 날려서 db에 데이터 delete 하기
  axios({
    method: "delete",
    url: "/visitor",
    data: {
      id: id,
    },
  }).then((res) => {
    console.log("delete /visitor 요청에 대한 응답 ", res.data);

    alert("삭제 성공!");

    obj.parentElement.parentElement.remove();
  });
}
