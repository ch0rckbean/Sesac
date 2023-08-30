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
        <button type="button" onclick="updateVisitor1(this,${id})">수정</button>
      </td>
      <td>
        <button type="button" onclick="deleteVisitor(this,${id})">삭제</button>
      </td>
    </tr>`;

    //js
    tbody.insertAdjacentHTML("beforeend", newVisitor); //오름차순
    // tbody.insertAdjacentHTML("afterBegin", newVisitor);  //내림차순
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

function updateVisitor1(obj, id) {
  //수정 버튼 클릭 시
  // - 등록 버튼 없애고 변경/취소 버튼 구현
  // - form들에 id에 해당하는 내용 채워넣기

  console.log("id", id);
  // 1) 등록 버튼 없애고 변경/취소 버튼 구현
  const btnGroup = document.querySelector("#button-group");
  const updateBtns = `
          <button type="button" onclick="updateVisitor2(${id})">변경</button>
          <button type="button" onclick="cancelUpdate()" >취소</button>`;
  btnGroup.innerHTML = updateBtns;

  // 2) form들에 id에 해당하는 내용 채워넣기
  const form = document.forms["visitor-form"];
  form.name.value =
    obj.parentElement.previousElementSibling.previousElementSibling.textContent;
  form.comment.value = obj.parentElement.previousElementSibling.textContent;
  // console.log(obj.parentElement.previousElementSibling.textContent);

  //** Node와 Element는 다름
  //https://hianna.tistory.com/712
  // form.name.value = obj.previousSibling.textContent;
  // form.comment.value = obj.parentElement.nextSibling.textContent;
  // console.log(obj.parentElement.childNodes[0]);
}

function cancelUpdate() {
  console.log("수정 취소");
  btnGroup.innerHTML =
    '<button type="button" onclick="createVisitor()">등록</button>';
  const form = document.forms["visitor-form"];
  form.name.value = "";
  form.comment.value = "";
}

function updateVisitor2(id) {
  //변경 버튼 클릭시
  console.log("수정 후 변경 버튼 클릭");
  console.log("up2 id", id);
  const form = document.forms["visitor-form"];
  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    // table의 값 수정값으로 변경
    const updatedVisitor = `
      <tr id="tr_${id}">
        <td>${id}</td>
        <td>${form.name.value}</td>
        <td>${form.comment.value}</td>
        <td>
            <button type="button" onclick="updateVisitor1(this,${id})">
              수정
            </button>
        </td>
        <td>
          <button type="button" onclick="deleteVisitor(this, ${id})">
            삭제
          </button>
        </td>
      </tr>
      `;
    const tr = document.querySelector(`#tr_${id}`);
    tr.innerHTML = updatedVisitor;
    alert("수정 성공!");
    // button-group 원상태로
    btnGroup.innerHTML =
      '<button type="button" onclick="createVisitor()">등록</button>';
    //form 값 초기화
    form.name.value = "";
    form.comment.value = "";
    console.log("changed name, comment", name, comment);
  });
}

///////////////// UPDATE 다른 코드
function editVisitor(id) {
  //annotation 때메 위 버튼이랑 연결 안 함
  console.log(`${id}번 수정!`);

  // TODO
  //1. id로 방명록 하나 조회(read one) -> input에 각각 value로 저장

  axios({
    // GET /visitor/:id
    method: "get",
    url: `/visitor/${id}`,

    // GET /visitor/id=1
    // method: "get",
    // url: "/visitor",
    // params: {
    //   id: id,
    // },
  }).then((res) => {
    console.log(res.data);
    const { name, comment } = res.data;
    const form = document.forms["visitor-form"];
    form.name.value = name;
    form.comment.value = comment;
  });

  // 2. [변경],[취소] 버튼 보이기
  const btns = `
  <button type="button" onclick="editDo(${id})">변경</button>
  <button type="button" onclick="cancel()">취소</button>
  `;
  btnGroup.innerHTML = btns;
}

// [변경] 버튼 클릭 시 => 실제 수정 요청해서 방명록 업데이트 수행
function editDo(id) {
  const form = document.forms["visitor-form"];

  axios({
    method: "patch",
    url: "/visitor",
    data: {
      id: id,
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((res) => {
    console.log(res.data);
    const { isUpdated } = res.data;

    if (isUpdated) {
      alert("수정 완료ㅎㅎ");
    }
    const tr = document.querySelector(`#tr_${id}`).children;
    tr[1].textContent = form.name.value;
    tr[2].textContent = form.comment.value;

    // 수정 작업 이뤄지고 나서 input 초기화 & [등록] 버튼 보이기
    editCancel(); //함수 재사용
  });
}

// [취소] 버튼 클릭 시
// onclick 안 걸어놓음(중복)
// - input 초기화
// - btnGroup 요소 안에 다시 [등록] 버튼 보이기
function editCancel() {
  const form = document.forms["visitor-form"];
  form.name.value = "";
  form.comment.value = "";

  btnGroup.innerHTML = `<button type="button" onclick="createVisitor(${id})">등록</button>`;
}
