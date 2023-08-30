// TODO: 컨트롤러 코드
const User = require("../model/User");

// main
exports.main = (req, res) => {
  res.render("index");
};

// ** 페이지 이동
// 회원가입
exports.signup = (req, res) => {
  console.log("회원가입 페이지 이동");
  res.render("signup");
};
// 로그인
exports.signin = (req, res) => {
  console.log("로그인 페이지 이동");
  res.render("signin");
};
// 프로필
exports.profile = (req, res) => {
  console.log("프로필 페이지 이동");
  res.render("profile");
};

//** axios 연결/
// 회원가입
exports.doSignup = (req, res) => {
  console.log("회원가입 버튼 클릭");
  console.log("req.body | doSignup ", req.body);
  // console.log(Object.values(req.body)[0]);

  User.doSignup(req.body, (data) => {
    console.log("data | doSignup | CUser.js ", data);
    if (data === "Fail") {
      return res.send({ state: "Fail" });
    }
    return res.send({ state: "Success", res: data });
  });
};

// 로그인
exports.doSignin = (req, res) => {
  console.log("로그인 버튼 클릭");
  console.log("req.body | doSignin ", req.body);
  // console.log(Object.values(req.body).length);

  User.doSignin(req.body, (data) => {
    console.log("req.body | doSignin | Cuser.js", req.body);
    console.log("data | doSignin | Cuser.js", data);
    if (data == "Fail") {
      return res.send({ state: "Fail" });
    }
    // return res.send({ id: req.body.id, pw: req.body.pw, state: "Success" });
    return res.send({ id: data.id, pw: data.pw, state: "Success" });
  });
};
