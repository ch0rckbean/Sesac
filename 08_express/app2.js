const express = require("express");
const app2 = express();
const PORT = 8000;

app2.set("view engine", "ejs");
app2.set("views", "./views2");

app2.get("/", function (req, res) {
  res.send("Hello Express");
});
app2.get("/myRoom", function (req, res) {
  res.render("myRoom");
});
app2.listen(PORT, function () {
  console.log("Listened Successfully");
});
