const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

//multer 관련 설정
const multer = require("multer");
const upload = multer({
  dest: "uploads/", //dest: client가 업로드한 파일 저장할 서버측 경로
});
// 1. single(): 하나의 파일을 업로드
// upload.single("userfile") :
//  - 클라이언트 요청 들어오면 multer 설정(upload 변수)에 따라 파일 업로드 후 req.file 객체 생성
// single() 인자는 input 태그 name 속성과 일치해야
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log("req.file ", req.file); //file 업로드 정보
  console.log("req.body ", req.body); //file 외 정보들
  res.send("Server: File Uploaded!");
});
// req.file
// {
//     fieldname: 'userfile',  //form에 정의한 name 값
//     originalname: 'baos.jpg',  //원본 파일명
//     encoding: '7bit',  //파일 인코딩 타입
//     mimetype: 'image/jpeg',  //파일 타입
//     destination: 'uploads/',  //파일 저장 경로
//     filename: 'f6ccee4ee277aea2691c4e2282ef8f04', //destination 저장명
//     path: 'uploads\\f6ccee4ee277aea2691c4e2282ef8f04', //업로드된 파일 전체 경로
//     size: 41407 //파일 크기
//   }

// 2.

app.listen(PORT, () => {
  console.log("Server Opened");
});
