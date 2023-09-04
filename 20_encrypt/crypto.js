// crypto
// node 내장 모듈
const crypto = require("crypto");

// crypto "단방향" 암호화 구현
// createHash()
//  - 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호호 방식

const createHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
  return crypto.createHash("SHA512").update(password).digest("base64");
};

// 해시함수의 한계 : 레인보우 테이블
//   => 암호화된 비번을 바르게 역추적해서 원본 비번 찾아낼 수 있음
console.log(createHashedPassword("1234"));
console.log(createHashedPassword("1234")); //같은 pw라면 같은 해시 값 도출

// pbkdf2(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
//  - 비밀번호 기반 키 도출 함수. 주로 비번 저장 시 사용
//  - buffer 형식의 데이터 반환 -> toString() 이용해 문자열로 변환

// 1. 단방향 암호화 생성 함수
function saltAndHashPassword(password) {
  const salt = crypto.randomBytes(16).toString("base64"); // 임의의 salt 생성
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = "SHA512"; // 해시 알고리즘

  // hash => salt랑 password를 결합해 해시(암호화된 비번) 생성
  const hash = crypto
    .pbkdf2Sync(password, salt, iterations, keylen, digest)
    // Buffer -> string 변환
    .toString("base64");

  return {
    salt,
    hash,
  };
}

// 2. 암호 비교 함수
// : inputPassword(제공된 비번), salt, hash 기반 새 해시 생성하고,
//   sabedHash랑 비교
// 제공된 비번이랑 원래 비번 같으면 두 해시 값도 일치
function checkPassword(inputPassword, savedSalt, savedHash) {
  const iterations = 100; // 반복 횟수
  const keylen = 64; // 키의 길이
  const digest = "SHA512"; // 해시 알고리즘

  const hash = crypto
    .pbkdf2Sync(inputPassword, savedSalt, iterations, keylen, digest)
    .toString("base64");

  return savedHash === hash;
}

// 사용 예제
const password = "1234!!";

// 비번 암호화
const { salt, hash } = saltAndHashPassword(password); // 구조분해
console.log(
  `비번 암호화에 쓰인 Salt: ${salt}, 비번 암호화에 쓰인 hash: ${hash}`
);
// 비밀번호 확인
const inputPassword = "1234!";
const isMatch = checkPassword(inputPassword, salt, hash);
console.log(`비밀번호 일치: ${isMatch}`);
