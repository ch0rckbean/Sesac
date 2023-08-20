const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
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

app.listen(PORT, () => {
  console.log("Server Opened");
});
