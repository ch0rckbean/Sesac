// 경로 라우팅만
const express = require("express");
const ctrlr = require("../controller/Cmain");
const router = express.Router();

router.get("/", ctrlr.main);
// router.post("/loginForm", ctrlr.result);  //필수실습
router.post("/loginForm", ctrlr.result2); //선택실습

module.exports = router;
