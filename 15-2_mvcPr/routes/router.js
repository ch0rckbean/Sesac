// 경로 라우팅만
const express = require("express");
const ctrlr = require("../controller/Cmain");
const router = express.Router();

router.get("/", ctrlr.main);
router.post("/loginForm", ctrlr.result);

module.exports = router;
