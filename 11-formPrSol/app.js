const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("/views", "views");
// 미들웨어(middleware)
// : 요청(req)과 응답(res)의 중간에서 작업하는 코드
// app.use()

// req.body 객체를 해석할 수 있도록 body-parser 미들웨어 등록
app.use(express.urlencoded({ extended: true })); // post 요청으로 들어오는 모든 형식의 데이터를 파싱
app.use(express.json()); // json 형식으로 데이터를 주고 받음

//라우팅: [요청 방식(get,post,..)+요청 경로] 세트가 겹치면 안 됨

// 1.GET /경로: 요청 시 main 페이지 보여주기
app.get("/", (req, res) => {
  res.render("main");
});
// 2.main페이지 내에서 pr1,pr2 페이지 이동
// a 태그를 통해 GET이 되면 다음 과정을 통해 해당 페이지 렌더
app.get("/pr1", (req, res) => {
  res.render("pr1");
});
app.get("/pr2", (req, res) => {
  res.render("pr2");
});
// 3.각 pr1,pr2에서 결과 페이지 이동
app.get("/pr1Result", (req, res) => {
  console.log(req.query);
  res.render("result", { user: req.query });
});
app.post("/pr2Result", (req, res) => {
  console.log(req.body);
  res.render("result", { user: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
