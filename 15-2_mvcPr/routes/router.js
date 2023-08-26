// 경로 라우팅만
const express = require("express");
const ctrlr = require("../controller/Cmain");
const router = express.Router();

// app.post("/pr_loginResult", (req, res) => {
//   if ((req.body.id == realId) & (req.body.pw === realPw)) {
//     res.send({ state: "Success" });
//   } else {
//     res.send({ state: "Fail" });
//   }
// });

router.post("/loginResult", ctrlr.result);

module.exports = router;
