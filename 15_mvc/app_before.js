const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요^~^",
  },
  {
    id: 2,
    userid: "happy",
    date: "2022-11-01",
    comment: "반가워유",
  },
  {
    id: 3,
    userid: "lucky",
    date: "2022-11-02",
    comment: "오 신기하군",
  },
  {
    id: 4,
    userid: "bestpart",
    date: "2022-11-02",
    comment: "첫 댓글입니당ㅎㅎ",
  },
];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  res.render("comments", { comments: comments });
});

app.get("/comment/:id", (req, res) => {
  // req.params: 라우트 매개변수에 대한 정보 담겨 있음
  console.log(req.params); //{ id: '1' }
  const cmtId = Number(req.params.id);

  // ex) get/comment/0 ,get/comment/5 ,get/comment/appp ... 등에 대한 Error Handling
  // 1-1. :id 0,7 같은 존재하지 않는 id로 접근 시 404 페이지
  //    :id 범위 1~4(comments.length)
  if (cmtId < 1 || cmtId > comments.length) {
    res.render("404");
  }
  // 1-2. :id 변수에 숫자가 아닌 문자가 온다면 404 페이지
  if (typeof cmtId !== "number") {
    //   if (typeof isNaN(cmtId))  {
    res.render("404");
  }
  //2, if(!comments[cmtId-1]){
  //     res.render("404");
  // }

  // ?
  // if (!req.params.id in comments) {
  //     //문자일 수도 있으니 cmtId말고 req.params.id로 햇을 때
  //   res.render("404");
  // }

  res.render("comment", { comment: comments[cmtId - 1] });
});

app.get("/test/:id/:name", (req, res) => {
  console.log(req.params);
  res.send("test res success!");
});

//404 Error Handling
// - 반드시 맨 마지막 라우트로 선언 필요
app.get("*", (req, res) => {
  console.log(404);
  res.render("404");
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
