const { User } = require("../models");

exports.signup = (req, res) => {
  res.render("signup");
};

exports.postSignup = async (req, res) => {
  // User.postSignup(req.body, () => {
  //   res.end();
  // });
  const { userid, pw, nickname } = req.body;
  const result = await User.create({
    userid,
    pw,
    nickname,
  });
  console.log("CREATE result", result);
  res.send(result);
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = async (req, res) => {
  // User.postSignin(req.body, (result) => {
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });
  const { userid, pw } = req.body;
  const result = await User.create({ userid, pw });
  console.log("postSignup", result);
  res.send(result);
};

exports.postProfile = async (req, res) => {
  // User.postProfile(req.body.userid, (result) => {
  //   res.render("profile", { data: result[0] });
  // });
  const { id } = req.params;
  const result = await User.findOne({
    where: { id: id },
  });
  res.render("profile", { data: result[0] });
};

exports.editProfile = async (req, res) => {
  // User.editProfile(req.body, () => {
  //   res.send(true);
  // });
  const result = await User.update(
    { nickname: req.body.nickname, pw: req.body.pw },
    { where: { id: req.body.userid } }
  );
  res.send(true);
};

exports.deleteProfile = async (req, res) => {
  // User.deleteProfile(req.body.id, () => {
  //   res.send(true);
  // });
  const result = await User.destroy({
    where: { id: req.body.id },
  });
  res.send(true);
};
