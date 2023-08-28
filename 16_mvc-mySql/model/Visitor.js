// 이전 코드
// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

// 이후 코드
const mysql = require("mysql");

//DB 연결 설정
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "sesac",
});

exports.getVisitors = (callback) => {
  conn.query("SELECT * FROM visitor", (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model >> ", rows);
    callback(rows);
  });
};
