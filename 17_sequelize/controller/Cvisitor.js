// const Visitor = require('../model/Visitor');
const { Visitor } = require("../models"); // ../models/index.js

exports.main = (req, res) => {
  res.render("index");
};

// read all
exports.getVisitors = async (req, res) => {
  // [before]
  // Visitor.getVisitors((result) => {
  //   console.log('controller >>', result);
  //   res.render('visitor', { data: result });
  // });

  // [after]
  const result = await Visitor.findAll();
  console.log("READ result ", result);
  res.render("visitor", { data: result });
};

// CREATE
exports.postVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); // { name: xx, comment: yy }
  // const { name, comment } = req.body;

  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  //   res.send({ id: insertId, name: name, comment: comment });
  // });

  // [after]
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  console.log("CREATE result", result); // create메서드가 실행된 결과 (== insert 한 데이터 값)
  res.send(result);
};

exports.deleteVisitor = async (req, res) => {
  //[before]
  // console.log(req.body); //{id: nn}
  // const { id } = req.body;
  // Visitor.deleteVisitor(id, (result) => {
  //   console.log("controller >> ", result); //true
  //   res.send(result); //res.send(true)
  // });
  const { id } = req.body;
  const result = await Visitor.destroy({
    where: { id: id },
  });
  console.log("DELETE result", result);
  res.send(true);
};

// read one
exports.getVisitor = async (req, res) => {
  // [before]
  // console.log(req.query); //{} : GET /visitor?id=n 쿼리스트링 썼을 때
  // console.log(req.params); //{id:n} : GET /visitor/:id
  // const { id } = req.params;

  // Visitor.getVisitor(id, (result) => {
  //   console.log(result);
  //   res.send(result);
  // });

  // [after]
  const { id } = req.params;
  const result = await Visitor.findOne({
    where: { id: id },
  });
  console.log(result);
  res.send(result);
};

exports.upVisitor = async (req, res) => {
  // [before]
  // console.log(req.body); //{id:00, name:00 , comment:00}
  // Visitor.upVisitor(req.body, () => {
  //   res.send({ isUpdated: true });
  // });

  // [after]
  // update(변경될 값, where절)
  await Visitor.update(
    { name: req.body.name, comment: req.body.comment },
    {
      where: { id: req.body.id },
    }
  );
  res.send({ isUpdated: true });
};
