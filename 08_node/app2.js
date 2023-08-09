// 파일을 불러옴
// const math2 = require("./math2");

// console.log(math2, typeof math2); //{ add: [Function: add], PI: 3.141592, E: 2.718 } object
// console.log(math2.PI);
// console.log(math2.E);

// console.log(math2.add(8, 2));
// console.log(math2.sub(4, 2));
// console.log(math2.mul(5, 6));
// console.log(math2.div(72, 9));
// console.log(typeof require); //function

//구조분해 후
const { add, PI, E } = require("./math2");
console.log(PI);
console.log(E);
console.log(add(8, 2));
