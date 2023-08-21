const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("/views", express.static(__dirname + "/views"));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

//multer 관련 설정
const multer = require("multer");
const { userInfo } = require("os");
//path 내장 모듈
const path = require("path"); //경로에 관한 내장 모듈
const upload = multer({
  dest: "uploads/", //dest: client가 업로드한 파일 저장할 서버측 경로
});
const uploadDetail = multer({
  //multer 세부 설정
  //storage: 저장할 공간에 대한 정보
  storage: multer.diskStorage({
    destination(req, file, done) {
      //done: callbackFunc
      done(null, "uploads/"); //파일 업로드할 경로 설정
      //null: error 의미 => 에러 x를 null로 전달해 콜백 함수 호출
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일 확장자 추출. ex).txt .png ...
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      //basename: 원본 파일에서 확장자 제외 파일 이름만 추출
      // 파일명에 날짜도 같이 저장하는 이유
      //   1. 파일 이름 중복 방지
      //   2. 파일 이름만 보고 파일 저장 시점 유추
    },
  }),
  //limits: 파일 제한 정보
  limits: {
    fileSize: 5 * 1024 * 1024, //5MB
  },
});

// 1. single(): 하나의 파일을 업로드
// upload.single("userfile") :
//  - 클라이언트 요청 들어오면 multer 설정(upload 변수)에 따라 파일 업로드 후 req.file 객체 생성
// single() 인자는 input 태그 name 속성과 일치해야
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
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

// 2. array(): 여러 파일 한 번에 업로드
// uploadDetail.array("userfiles") : 클라이언트 요청 들어오면
//multer 설정(uploadDetail 변수)에 따라 파일 업로드 후, req.files 생성
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files); // [{파일1 정보},{파일2 정보},..] : 배열 형태로 각 파일 정보 출력
  console.log(req.body);
  res.send("하나의 인풋에 여러 파일 업로드 완료!");
});

// 3.fields(): 여러 파일 각각 인풋에 업로드
// req.files에서 파일 정보 확인
// fields()매개 변수로 input 태그 name 각각 넣기
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files); // {userfile1: [{파일 정보}], userfile1: [{파일 정보}] } 객체 안에 배열 형태로 각 파일 정보
    console.log(req.body);
    res.send("여러 인풋에 여러 파일 업로드 완료!");
  }
);

// 4. 동적 폼 전송
app.post("/dynamic", uploadDetail.single("dynamicUserFile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, () => {
  console.log("Server Opened");
});

// 5. 실습
//이름 형식에 맞춰 저장
const prUploadInfo = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
      //   console.log(req.body);
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.post("/prResult", prUploadInfo.single("prFile"), (req, res) => {
  console.log("req.file ", req.file);
  console.log("req.body ", req.body);
  console.log(req.file.filename);
  //   res.render(req.file.path);
  res.render("prResult", {
    src: "uploads/" + req.file.filename,
    userInfo: req.body,
  }); //페이지 이동
});
