const ex = require("express");
const app = ex();
const PORT = 9000;

app.set("view engine", "ejs");
app.set("views", "./views2");

app.use(ex.urlencoded({ extend: true })); //POST형식으로 들어오는 모든 데이터 파싱
app.use(ex.json()); //json 쓰겠다

app.get("/", (req, res) => {
  res.render("index2", { title: "Form Review" });
});

app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("result2", { title: "getForm", userInfo: req.query });
});
app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("result2", { title: "postForm", userInfo: req.body });
});

app.get("/getInfo", (req, res) => {
  console.log(req.query);
  res.render("getInfo", { title: "getInfo", userInfo: req.query });
});

app.listen(PORT, () => {
  console.log("Server Opened!");
});
