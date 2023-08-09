// math2 module
//add함수 정의 파일

const PI = 3.141592;
const E = 2.718;

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

/* add함수를 다른 js 파일에서 쓸 수 있도록 내보내겠다.*/
// case1: 함수를 객체로 감싸서 내보내기
// module.exports = {
//   add: add,
//   sub: sub,
//   mul: mul,
//   div: div,
//   PI: PI,
//   E: E,
// };

//==
//  module.exports{
// obj에서 KeyboardEvent,value가 동일할 때 생략 가능
// add,PI,E,}

console.log(typeof module); //object

//case2: 하나씩 내보내기
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.div = div;
// module.exports.E = E;

// case2를 더 간단히!
exports.add = add;
exports.sub = sub;
exports.mul = mul;
exports.div = div;
exports.E = E;
exports.PI = PI;
