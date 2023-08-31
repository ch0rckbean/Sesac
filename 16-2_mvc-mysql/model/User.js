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
  const { id, pw, nickname } = data; //Ctrlr에서 받아온 req.body
  conn.query(
    `INSERT INTO user(userid, name, pw) VALUES ("${id}","${pw}","${nickname}")`,
    (err, row) => {
      if (err) {
        throw err;
      }
      // console.log("data | doSignup | User.js", data);
      console.log("row | doSignup | User.js", row);
      // for (let i = 0; i < Object.keys(data).length; i++) {
      //   if (Object.values(data)[i].length > 0) {
      //     // console.log("ss", Object.values(data).length);
      //     cb(row); //ctrlr로 row를 보냄
      //     //for문 내에 있어서 계속 ERR_HTTP_HEADERS_SENT 에러가 났었음 ㅠㅠ
      //   }
      if (
        Object.values(data)[0].length &
        Object.values(data)[1].length &
        Object.values(data)[2].length
      ) {
        cb(row);
      } else {
        cb("Fail");
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

//** 프로필/
// exports.editPro=(data,cb)=>{
//   console.log(data);
//   conn.query(`ALTER TABLE user SET username="${data.nickname},pw="${data.pw}" `),
//   (err,row)=>{
//     if(err){throw err}

//   }

// }
