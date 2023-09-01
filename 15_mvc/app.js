const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.set("/views", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//모듈 저장
const indexRouter = require("./routes/index");

//첫번째 인자 경로에 온 거 두번째 인자로 넘기겠다.
//indexRouter에서의 기본 경로- localhost:PORT/user
app.use("/", indexRouter);
// app.get("/", (req, res) => {
//   res.render("index");
// });
app.get("*", (req, res) => {
  console.log(404);
  res.render("404");
});

//localhost: PORT로 express 앱 실행
app.listen(PORT, () => {
  console.log("Server Opened");
});
