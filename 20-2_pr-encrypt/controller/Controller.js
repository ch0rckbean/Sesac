const { User } = require("../models");

exports.main = (req, res) => {
  req.session.user
    ? res.render("index", { isLogin: true })
    : res.render("index", { isLogin: false });
};
exports.getRegister = (req, res) => {
  res.render("register");
};
exports.getLogin = (req, res) => {
  res.render("login");
};
exports.getAll = (req, res) => {
  res.render("all");
};
exports.getMyProfile = (req, res) => {
  res.render("myProfile");
};
