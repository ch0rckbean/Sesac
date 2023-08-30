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
      // console.log("data | doSignup | User.js", data);
      console.log("row | doSignup | User.js", row);
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (Object.values(data)[i].length > 0) {
          // console.log("ss", Object.values(data).length);
          cb(row);
        } else {
          cb("Fail");
        }
      }
    }
  );
};

//** 로그인/
exports.doSignin = (data, cb) => {
  console.log(data);
  conn.query(
    `SELECT * FROM user WHERE userid="${data.id}" AND pw="${data.pw}"`,
    (err, row) => {
      if (err) {
        throw err;
      }
      if (row.length > 0) {
        console.log("row | doSignin | User.js", row);
        cb(row);
      } else {
        cb("Fail");
      }
    }
  );
};
