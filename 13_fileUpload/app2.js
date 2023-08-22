const exp = require("express");
const app = exp();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("/pages", exp.static(__dirname + "/pages"));

app.get("/", (req, res) => {
  res.render("main");
});
app.listen(PORT, () => {
  console.log("Server Opened");
});
