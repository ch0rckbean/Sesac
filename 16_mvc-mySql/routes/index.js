const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// 기본주소: localhost:PORT
router.get("/", controller.main);
// READ: 방명록 전체 보기
router.get("/visitors", controller.getVisitors);

// CREATE: 방명록 하나 추가
router.post("/visitor", controller.postVisitor);

module.exports = router;
