// bcrypt
//  - 비밀번호 암호화 알고리즘
//  - 주로 강력한 보안 필요할 때 사용
//  - blowfish 암호를 기반으로 설계된 단방향 암호화 함수
//  (보안 강화 위해 해시화 하는 것으로 원본 데이터 복원 기능 x)

const bcrypt = require("bcrypt");

const originalPassword = "1234";
const saltRounds = 10; // 솔트 라운드 수 정의

// 1. 비밀번호 해싱 함수
function hashPassword(password) {
  return bcrypt.hashSync(password, saltRounds);
}

// 2. 원본 비밀번호화 해시된 비밀번호가 일치하는지 확인하는 함수
function comparePassword(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword);
}

// 사용 예제
// 원본 비번 해싱 결과
const hashedPassword = hashPassword(originalPassword);
console.log(`Hashed password: ${hashedPassword}`);

// 원본 비번이랑 해시된 비번 일치 여부 확인
const isMatch = comparePassword(originalPassword, hashedPassword); // boolean 값 반환
console.log(`origianlPassword === hashedPassword: ${isMatch}`);

const isMatch2 = comparePassword("tmp Pw", hashedPassword); // boolean 값 반환
console.log(`origianlPassword === hashedPassword: ${isMatch2}`);
