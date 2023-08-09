//http 모듈로 웹서버 생성

/*기본 세팅 */
const http = require("http");
const fs = require("fs"); //파일 관련 내장 모듈
const PORT = 8000;

const server = http.createServer(function (request, response) {
  //   response.writeHead(200, { "content-type": "text/html; charset=utf8" }); //응답 헤더
  //인코딩
  //   response.write("<h1>Hello</h1>"); //응답 본문
  //   response.end("<p>nodeJS Server</p>"); //응답 본문 작성 후 응답 종료

  /*html 파일 불러오기 */
  //예외처리 try catch 구문
  try {
    // const data = fs.readFileSync("./index.html");
    // 퀴즈: 404.html 만들어서 404.html로 응답하기
    const data = fs.readFileSync("./404.html");
    response.writeHead(200, { "content-type": "text/html; charset=utf8" });
    response.write(data);
    response.end();
  } catch (error) {
    response.writeHead(404);
    console.log(error); //개발자 확인용
    response.write(error.message); //사용자 안내용
    // error == error.name: error.message
    response.end();
  }
});

//클라이언트 요청 ==request 이벤트
//connection 이벤트: 클라이언트가 접속(클라이언트와 서버가 연결됐을 때) 발생
server.on("connection", function (request, response) {
  console.log("Client Connected");
});

//서버 실행
server.listen(PORT, function () {
  console.log(`${PORT} listened`);
});

//10초 후 서버 종료
// setTimeout(function () {
//   console.log("서버가 종료되었습니다.");
//   server.close();
// }, 10000);
