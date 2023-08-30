// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234",
  database: "sesac",
});

//** 회원가입
exports.doSignup = (data, cb) => {
  conn.query(
    `INSERT INTO user(userid, name, pw) VALUES (${id},${pw},${nickname})`,
    (err, row) => {
      if (err) {
        throw err;
      }
      console.log("signUp | doSiginup | User.js", row);
      cb(row);
    }
  );
};
