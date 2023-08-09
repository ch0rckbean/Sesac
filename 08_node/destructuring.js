//구조분해할당 : 구조를 분해해서 할당(=연산자) 하겠다!
// 1.객체({})를 구조분해
const bensCookie = {
  white: "화이트 마카다미아",
  dark: "다크 초코",
  orange: "밀크 초콜릿 오렌지",
};
//원본
console.log(bensCookie.dark);
console.log(bensCookie.white);
console.log(bensCookie.orange);

//객체를 구조분해 해보쟈!!!
//객체의 key와 이름을 동일하게 해야 함
const { white, dark, orange } = bensCookie; //순서 상관 없음
// ===
//  const { white, dark, orange } = {
//   white: "화이트 마카다미아",
//   dark: "다크 초코",
//   orange: "밀크 초콜릿 오렌지",
// };
console.log(dark);
console.log(white);
console.log(orange);

// 2. 배열([])을 구조분해
