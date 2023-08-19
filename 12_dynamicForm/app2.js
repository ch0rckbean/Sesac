const exp = require("express");
const app = exp();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("/views", exp.static(__dirname + "/views"));
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

app.get("/", (req, res) => {
  res.render("index2");
});

// 1.ajax
app.get("/ajax", (req, res) => {
  console.log("여기는 서버", req.query);
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
