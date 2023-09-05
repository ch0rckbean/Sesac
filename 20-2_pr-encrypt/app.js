const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require("express-session");
app.use(
  session({
    secret: "MySessionSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const mainRouter = require("./routes/router");
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});
