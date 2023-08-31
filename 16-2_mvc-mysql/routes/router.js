// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// 기본주소: localhost:PORT
router.get("/", controller.main);

// ** 페이지 이동
// 회원가입 페이지로 이동
router.get("/user/signup", controller.signup);
// 로그인 페이지로 이동
router.get("/user/signin", controller.signin);
// 프로필 페이지로 이동
router.get("/user/profile", controller.profile);

// ** axios 연결
//회원가입
router.post("/form_register", controller.doSignup);
//로그인
router.post("/form_login", controller.doSignin);
//프로필 - 회원정보 수정
router.get("/user/profile/edit", controller.doSignin);
router.patch("/form_profile", controller.editPro);

//프로필 - 회원탈퇴
router.get("/user/profile/delete", controller.doDelete);
module.exports = router;
