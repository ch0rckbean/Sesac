// 경로 진입 시 실행 구문
const DB = require("../model/db");

// main 페이지
exports.main = (req, res) => {
  console.log("Main Page");
  res.render("login");
};

// 보낼 결과 모듈
exports.result = (req, res) => {
  console.log("req.body ", req.body);
  console.log("req.params", req.params);
  console.log("DB.id ", DB.id);
  console.log("DB.pw ", DB.pw);

  for (let info of DB.getInfo()) {
    console.log("info ", info);
    if ((req.body.id == info.id) & (req.body.pw == info.pw)) {
      return res.send({ state: "Success" });
    }
  }
  res.send({ state: "Fail" });
};
