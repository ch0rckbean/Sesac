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

exports.postVisitor = (data, callback) => {
  //매개변수
  // - data: 프론트엔드에서 유저가 입력한 값(req.body)
  // - callback: query 실행 후 호출할 함수

  conn.query(
    `INSERT INTO visitor VALUES(NULL, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("model >> ", rows);
      callback(rows.insertId);
      //rows 출력해보면
      /*OkPacket {
        fieldCount: 0,
        affectedRows: 1,
        insertId: 6,
        serverStatus: 2,
        warningCount: 0,
        message: '',
        protocol41: true,
        changedRows: 0
      }*/
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  console.log("model >> ", id); //프론트에서 알려준 삭제할 데이터의 PK
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("model >> ", rows);
    callback(true); //삭제 성공 의미
  });
};

exports.updateVisitor = (data, callback) => {
  const { id, name, comment } = data;
  console.log("data ", data);
  conn.query(
    `UPDATE visitor SET name="${name}", comment="${comment}" WHERE id=${id}`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("model >> ", rows);
      callback(rows.insertId);
    }
  );
};
