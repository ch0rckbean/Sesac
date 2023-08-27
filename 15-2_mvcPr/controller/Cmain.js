// 경로 진입 시 실행 구문
const DB = require("../model/db");
console.log(DB.users); // apple//1234//사과사과//banana//4321//바나나나나//happy//qwer1234//해피해피

// main 페이지
exports.main = (req, res) => {
  console.log("Main Page");
  res.render("login");
};

// 보낼 결과 모듈
exports.result = (req, res) => {
  console.log("req.body ", req.body);
  // console.log("req.params", req.params); //{}
  // console.log("DB.id ", DB.id); //undefined
  // console.log("DB.pw ", DB.pw); //undefined

  for (let info of DB.getInfo()) {
    console.log("info ", info);
    if ((req.body.id == info.id) & (req.body.pw == info.pw)) {
      return res.send({ state: "Success" });
    }
  }
  return res.send({ state: "Fail" });
};
