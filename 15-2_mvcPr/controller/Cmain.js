// 경로 진입 시 실행 구문
const DB = require("../model/db");

// main 페이지
exports.main = (req, res) => {
  res.render("login");
};

const realId = "myId";
const realPw = "myPw";

// 보낼 결과 구문
// 성공 여부 여기에 보내면 되나?
exports.result = (req, res) => {
  if ((req.body.id == realId) & (req.body.pw == realPw)) {
    res.send({ state: "Success" });
  } else {
    res.send({ state: "Fail" });
  }
};
