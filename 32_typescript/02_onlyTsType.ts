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
