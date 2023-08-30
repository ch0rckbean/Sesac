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
  console.log("data | doSignup | User.js", data);
  const { id, pw, nickname } = data;
  conn.query(
    `INSERT INTO user(userid, name, pw) VALUES ("${id}","${pw}","${nickname}")`,
    (err, row) => {
      if (err) {
        throw err;
      }
      console.log("row | doSignup | User.js", row);
      cb(row);
    }
  );
};

//** 로그인/
exports.doSignin = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE id=${id} AND password=%{pw}`,
    (err, row) => {
      if (err) {
        throw err;
      }
      console.log("signIn | doSignin | User.js", row);
      if (row.length > 0) {
        console.log("signIn | doSignin | User.js", row);
        cb(row);
      }
    }
  );
};
