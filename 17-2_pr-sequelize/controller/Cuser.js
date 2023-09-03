const { User } = require("../models/index.js");

exports.signup = (req, res) => {
  console.log("signUp");
  res.render("signup");
};

exports.postSignup = async (req, res) => {
  // User.postSignup(req.body, () => {
  //   res.end();
  // });

  const { id, userid, name, pw } = req.body;
  const result = await User.create({
    id,
    userid,
    name,
    pw,
  });
  console.log("Post SignUp");
  console.log(result);
  res.send(result);
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignin = async (req, res) => {
  // const sql = `SELECT * FROM user WHERE userid='${userid}' LIMIT 1`;

  // User.postSignin(req.body, (result) => {
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });

  // console.log(data); //{ userid: '00', pw: '00' }
  const { userid } = req.body;

  const result = await User.findOne({
    where: { userid: userid },
  });
  console.log("result ", result);
  if (result.length > 0) {
    res.send(true);
  } else {
    res.send(false);
  }
};

exports.postProfile = (req, res) => {
  User.postProfile(req.body.userid, (result) => {
    res.render("profile", { data: result[0] });
  });
};

exports.editProfile = (req, res) => {
  User.editProfile(req.body, () => {
    res.send(true);
  });
};

exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send(true);
  });
};
