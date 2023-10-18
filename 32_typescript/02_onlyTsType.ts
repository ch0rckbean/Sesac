// only typescripttype

// Tuple
let drink: [string, string] = ['사이다', '롯데'];
console.log(drink);

drink[0] = 'cider';
drink[1] = 'lotte';
console.log(drink);

// readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 700];
// drink2.push('dd')  //error

// Tuple ex
type productInfo = [number, string, number]; //type 별칭
let product1: productInfo = [1, '로지텍 MX Master3', 130000];
let product2: productInfo = [2, '로지텍 K580', 52000];

// Enum
enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = '아메리카노',
  cake = '케이크',
  bubbleTea = '버블티',
}

console.log(Auth.admin);
console.log(Cafe.cake);

enum Cake {
  choco,
  kiwi,
  berry = '베리',
}
console.log(Cake.choco); // 0
console.log(Cake.berry); // 베리

////////////////////////////////////
// any
// 명시적으로
let val: any;
val = true;
val = '하이';
val = 3;
val: {
  name: 'haribo';
}

// 암묵적으로
let val2;
val2 = false;
val2 = '바이';

////////////////////////////////////
// 실습
let cookie: readonly [object, boolean] = [
  { flavor: 'green tea', price: 2900 },
  true,
];

//[선택 실습] arrA와 arrB는 같은 결과가 출력된다. 차이가 무엇인지 생각 댓글로 달아보기!
let arrA: any[] = [1, true, 'string'];
let arrB = [1, true, 'string'];
console.log(typeof arrA, arrA);
console.log(typeof arrB, arrB);

//[선택 실습] enum 데이터 Cafe와 Auth에 대해서 console 데이터를 찍고 있다.
// 각각 출력되는 값과 에러가 발생한다면 왜 에러가 발생하는지 이유 찾아보기
enum Auth1 {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe1 {
  americano = '아메리카노',
  latte = '카페라떼',
}

console.log(Auth1[1]); // 출력 가능
console.log(Cafe1[1]); // 출력 불가능