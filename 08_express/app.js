const express = require("express");
const app = express(); //express 실행 해 app에 할당
const PORT = 8080;

app.set("view engine", "ejs"); //express 템플릿 엔진 종류(ejs) 등록
app.set("views", "./views"); //템플릿 엔진 파일을 저장할 위치 등록

// app.get(경로, 해당 경로로 들어왔을 때 실행할 함수)
// '/' : root경로. 서버주소, 포트번호(localhost:8080)
app.get("/", function (req, res) {
  //send(x): 응답으로 x 보냄
  //render(ejs_filename): 응답으로 ejs_file 이름 찾아서 해당 파일 내용 보냄
  //res.send("<h1>Hello Express!</h1>");
  res.render("index");
});

// "./sesac" 경로로 들어왔을 때 "새싹 영등포 캠퍼스 5기 수업중" 메시지 보이기
app.get("/sesac", function (req, res) {
  //  http://localhost:8080/sesac
  res.send("새싹 영등포 캠퍼스 5기 수업중");
});

/*퀴즈 */
// 1. /login 경로로 요청이 들어오면 로그인 페이지(ejs)를 응답
app.get("/login", function (req, res) {
  res.render("login");
});

// 2. /register 경로로 요청이 들어오면 회원가입 페이지(ejs)를 응답
app.get("/register", function (req, res) {
  res.render("register");
});

//서버가 실행할 PORT 번호 지정하고 실행 시 console.log
app.listen(PORT, function () {
  console.log(`${PORT} Listened Successfully`);
});
