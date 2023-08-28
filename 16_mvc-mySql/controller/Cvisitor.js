const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  // 이전 코드
  // res.render("visitor", { data: Visitor.getVisitors() });

  //이후 코드
  // console.log(Visitor.getVisitors());
  Visitor.getVisitors((result) => {
    console.log("controller >>", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log("req.body ", req.body);

  Visitor.postVisitor(req.body, (insertId) => {
    console.log("controller >> ", insertId);
    res.send({ id: insertId, name: req.body.name, comment: req.body.comment });
  });
};
