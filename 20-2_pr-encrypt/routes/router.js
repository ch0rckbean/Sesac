const express = require("express");
const controller = require("../controller/Controller");
const router = express.Router();

router.get("/", controller.main);

router.get("/register", controller.getRegister);
router.post("/register", controller.postRegister);

router.get("/login", controller.getLogin);
router.post("/login", controller.postLogin);

router.get("/all", controller.getAll);

router.get("/myProfile", controller.getMyProfile);

module.exports = router;
