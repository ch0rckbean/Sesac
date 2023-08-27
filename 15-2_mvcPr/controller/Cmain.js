// 경로 진입 시 실행 구문
const DB = require("../model/db");

// main 페이지
exports.main = (req, res) => {
  console.log("Main Page");
  res.render("login");
};

//////////필수 실습
// 보낼 결과 모듈
// exports.result = (req, res) => {
//   console.log("req.body ", req.body);
//   // console.log("req.params", req.params); //{}
//   // console.log("DB.id ", DB.id); //undefined
//   // console.log("DB.pw ", DB.pw); //undefined

//   for (let info of DB.getInfo()) {
//     console.log("info ", info);
//     if ((req.body.id == info.id) & (req.body.pw == info.pw)) {
//       return res.send({ state: "Success" });
//     }
//   }
//   return res.send({ state: "Fail" });
// };

/////////////선택실습
const users = DB.users;
// console.log("user ", users); // apple//1234//사과사과//banana//4321//바나나나나//happy//qwer1234//해피해피

exports.result2 = (req, res) => {
  usersArr = users.split("//");
  // console.log("usersArr", usersArr);

  // for (let i = 0; i <= usersArr.length; i += 3) {
  //   //id만 출력
  //   console.log("id ", i, usersArr[i]);
  // }
  // for (let i = 1; i <= usersArr.length; i += 3) {
  //   //pw만 출력
  //   console.log("pw ", i, usersArr[i]);
  // }
  // for (let i = 2; i <= usersArr.length; i += 3) {
  //   //userName만 출력
  //   console.log("userName ", i, usersArr[i]);
  // }
  for (let i = 0; i <= usersArr.length; i += 3) {
    console.log("id ", i, usersArr[i]);
    console.log("pw", i, usersArr[i + 1]);
    console.log("user input id", req.body.id);
    console.log("user input pw", req.body.pw);

    if ((req.body.id == usersArr[i]) & (req.body.pw == usersArr[i + 1])) {
      return res.send({ state: "Success", userName: usersArr[i + 2] });
    }
  }
  return res.send({ state: "Fail" });
};
