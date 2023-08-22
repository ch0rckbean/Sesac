const exp = require("express");
const app = exp();
const PORT = 8001;

app.set("view engine", "ejs");
app.set("/pages", exp.static(__dirname + "/pages"));
app.use("/up2", exp.static(__dirname + "/up2"));
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());

//multer 관련 설정
const multer = require("multer");
const { userInfo } = require("os");

//path 내장 모듈
const path = require("path");
const upload = multer({
  dest: "up2/", //사용자 업로드 파일 저장 경로
});
const upInfo = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "up2/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

// single
app.post("/upload", upInfo.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("File Uploaded!");
});

//multi by one input
app.post("/upload/m1", upInfo.array("userfiles"), (req, res) => {
  res.send("Good!");
});

//mm
app.post(
  "/upload/m2",
  upInfo.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("GGGGGOOOD");
  }
);

//동적 폼 전송
app.post("/dynamic", upInfo.single("dFile"), (req, res) => {
  res.send(req.file);
});

// main page 연결
app.get("/", (req, res) => {
  res.render("main");
});

//실습
app.get("/loginFin", (req, res) => {
  res.render("/loginFin");
});

app.listen(PORT, () => {
  console.log("Server Opened");
});
