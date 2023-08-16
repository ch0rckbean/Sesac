const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

//미들웨어
// 요청(req),응답(res)의 중간에서 작업하는 코드
// app.use()
//req.body 객체 해석하도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); //post 요청으로 들어오는 모든 형식의 데이터 파싱
app.use(express.json()); //json 형식으로 데이터 주고 받음

//Routing
// Get "/" => index.ejs 보여줌
app.get("/", (req, res) => {
  //res.render(ejs 경로, 데이터)
  //ejs 경로: views/ 폴더 내부 ejs 파일 주소
  //데이터: 뷰에 넣어줄 정보
  res.render("index", { title: "폼 실습을 해봅시다" });
});

//GET "/getForm" => 임의의 메시지 전송
// get 방식은 클라이언트에서 보낸 데이터가 req.query에 저장
app.get("/getForm", (req, res) => {
  console.log(req.query);
  //   res.send("GET 요청 성공!");
  res.render("result", { title: "GET Request", userInfo: req.query });
  // == userInfo: { id: 'ZZanggu', pw: 'q' }
});
//POST "/postForm" => 임의의 메시지 전송
// post 방식은 클라이언트에서 보낸 데이터가 req.body에 저장
app.post("/postForm", (req, res) => {
  console.log(req.body);
  //app.use(express.urlencoded({ extended: true })); 해서 알 수 있음
  //   res.send("Post 요청 성공!");
  res.render("result", { title: "POST Request", userInfo: req.body });
  // == userInfo: { id: 'ZZanggu', pw: 'q' }
});

//실습1: get으로 정보 입력받기
app.get("/getInfo", (req, res) => {
  console.log(req.query);
  res.render("getInfo", { title: "GET Info", userInfo: req.query });
});

//실습2: post로 정보받기
// a 태그를 통해 GET이 되면 다음 과정을 통해 해당 페이지 렌더
app.get("/postInfo", (req, res) => {
  res.render("postInfo", { title: "post 실습" });
});
app.post("/postResult", (req, res) => {
  res.render("postResult", { title: "POST Result", userInfo: req.body });
});

app.listen(PORT, () => {
  console.log("Server is Opened");
});
