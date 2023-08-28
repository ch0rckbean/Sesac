const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engines", "ejs");
app.set("views", "/views");
app.use("/", express.static(__dirname) + "views");
app.set(app.json());

app.get("*", (req, res) => {
  console.log(404);
  res.render("404");
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
