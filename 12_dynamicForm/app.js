const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query); //client한테 response
});
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.get("/fetch", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//실습 1. axios get 회원가입
app.get("/pr_rgstr", (req, res) => {
  //a 태그 이어주기
  res.render("pr_rgstr");
});
app.get("/pr_rgstrResult", (req, res) => {
  //form name과 서버의 url이 같으면 안 됨
  console.log(req.query);
  res.send(req.query);
});

//실습 2. axios post 로그인
const realId = "myId";
const realPw = "myPw";

app.get("/pr_login", (req, res) => {
  //a 태그 이어주기
  res.render("pr_login");
});
app.post("/pr_loginResult", (req, res) => {
  if ((req.body.id == realId) & (req.body.pw === realPw)) {
    res.send({ state: "Success" });
  } else {
    res.send({ state: "Fail" });
  }
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
