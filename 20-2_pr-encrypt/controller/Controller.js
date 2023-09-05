const { User } = require("../models");

exports.main = (req, res) => {
  req.session.user
    ? res.render("index", { isLogin: true, data: req.session.user })
    : res.render("index", { isLogin: false });
};

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = async (req, res) => {
  const { userid, pw, name } = req.body;
  const result = await User.create({
    userid,
    pw,
    name,
  });
  console.log("CREATE result", result);
  res.send({ result });
};

exports.getLogin = (req, res) => {
  res.render("login");
};
exports.postLogin = async (req, res) => {
  console.log("res | postLogin", res);
  req.session.user = req.body.userid;
  console.log("res | postLogin", req.session.user);
  const result = await User.findOne({
    where: { userid: req.session.user },
  });
  res.send({ data: result });
};

exports.getAll = (req, res) => {
  res.render("all");
};
exports.getMyProfile = (req, res) => {
  res.render("myProfile");
};
