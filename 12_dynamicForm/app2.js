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
