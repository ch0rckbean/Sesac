const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("login");
});

// const realId = "myId";
// const realPw = "myPw";

// app.post("/pr_loginResult", (req, res) => {
//   if ((req.body.id == realId) & (req.body.pw === realPw)) {
//     res.send({ state: "Success" });
//   } else {
//     res.send({ state: "Fail" });
//   }
// });

app.listen(PORT, () => {
  console.log("Server Opened");
});
