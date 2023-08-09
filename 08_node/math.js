// math module
//add함수 정의 파일

const add = (a, b) => a + b;

// add함수를 다른 js 파일에서 쓸 수 있도록 내보내겠다.
module.exports = add; //모듈 1개만 내보냄
