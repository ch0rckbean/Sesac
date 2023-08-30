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

exports.deleteVisitor = (req, res) => {
  console.log(req.body); //{id: nn}
  const { id } = req.body;

  Visitor.deleteVisitor(id, (result) => {
    console.log("controller >> ", result); //true
    res.send(result); //res.send(true)
  });
};

exports.updateVisitor = (req, res) => {
  // console.log("req: ", req);
  console.log("req.body", req.body); //id가 Visitor에 빈 값으로 전달 됨 why?
  const { id, name, comment } = req.body;

  Visitor.updateVisitor(req.body, (insertId) => {
    console.log("controller insertId >> ", insertId);
    // console.log("controller >> ", req.body); //id 비어있음
    res.send({ id: insertId, name: name, comment: comment });
  });
};

///////////////// UPDATE 다른 코드
exports.getVisitor = (req, res) => {
  // console.log(req.query); //{} : GET /visitor?id=n 쿼리스트링 썼을 때
  console.log(req.params); //{id:n} : GET /visitor/:id
  const { id } = req.params;

  Visitor.getVisitor(id, (result) => {
    console.log(result);
    // result: Model의 Visitor에서 넘기는 getVisitor callback(rows)의 rows
    res.send(result);
  });
};

exports.upVisitor = (req, res) => {
  console.log(req.body); //{id:00, name:00 , comment:00}

  Visitor.upVisitor(req.body, () => {
    //result: 바뀐 값
    res.send({ isUpdated: true });
  });
};
