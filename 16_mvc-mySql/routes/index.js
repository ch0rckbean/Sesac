const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본주소: localhost:PORT
router.get("/", controller.main);

//frontend js에서 날린 axios들 처리
// READ: 방명록 전체 보기
router.get("/visitors", controller.getVisitors);

// CREATE: 방명록 하나 추가
router.post("/visitor", controller.postVisitor);

// DELETE: 방명록 하나 삭제
router.delete("/visitor", controller.deleteVisitor);

module.exports = router;
