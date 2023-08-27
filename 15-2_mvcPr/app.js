const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/router");
app.use("/", indexRouter);
app.get("*", (req, res) => {
  console.log(404);
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
