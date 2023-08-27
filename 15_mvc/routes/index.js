//모듈순이
// 이 모듈의 역할 : 경로 선언 관련 내용만 기술
// 경로 진입 시 실행 내용 => Controller로

const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// (임시) DB로부터 받아온 댓글 목록
// const comments = [
//   {
//     id: 1,
//     userid: "helloworld",
//     date: "2022-10-31",
//     comment: "안녕하세요^~^",
//   },
//   {
//     id: 2,
//     userid: "happy",
//     date: "2022-11-01",
//     comment: "반가워유",
//   },
//   {
//     id: 3,
//     userid: "lucky",
//     date: "2022-11-02",
//     comment: "오 신기하군",
//   },
//   {
//     id: 4,
//     userid: "bestpart",
//     date: "2022-11-02",
//     comment: "첫 댓글입니당ㅎㅎ",
//   },
// ];

// // 이 파일의 기본 경로: localhost:PORT/
// router.get("/", (req, res) => {
//   res.render("index");
// });

// // GET localhost:PORT/comments
// router.get("/comments", (req, res) => {
//   res.render("comments", { comments: comments });
// });

// // GET localhost:PORT/
// router.get("/comment/:id", (req, res) => {
//   // req.params: 라우트 매개변수에 대한 정보 담겨 있음
//   console.log(req.params); //{ id: '1' }
//   const cmtId = Number(req.params.id);

//   if (!comments[cmtId - 1]) {
//     res.render("404");
//   }

//   res.render("comment", { comment: comments[cmtId - 1] });
// });

///////////////////////////
// 기본 경로: localhost:PORT/user
router.get("/", controller.main);
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

//module.exports 구문을 통해 router를 내보내야
// 다른 모듈(파일)에서 router 객체 사용 가능
module.exports = router;
