const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/visitor", controller.visitor);
module.exports = router;
