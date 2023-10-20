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
// console.log(Cafe1[1]); // 출력 불가능

////////////////////////////////
//type & interface
// 1. interface
interface Student {
  name: string;
  isPassed: boolean;
  // addr:string
}
const student1: Student = {
  name: 'jinhe',
  isPassed: true,
  // addr:'seoul'
};
const student2: object = {
  name: 'jinhe',
  isPassed: true,
};
// interface 상속
// A+, A, B, C, D, F
// type Score = 'A+' | 'A' | 'B' | 'C' | 'D' | 'F';
enum Score {
  one = 'A+',
  two = 'A',
  thr = 'B',
  fou = 'C',
  fiv = 'D',
  six = 'F',
}

interface BaseballClub extends Student {
  // 자동으로 Student를 포함하고 있음
  position: string;
  height: number;
  readonly backNumber?: number; //? : 있어도 되고 없어도 됨
  [grade: number]: Score;
}
const otani: BaseballClub = {
  name: 'Otani',
  isPassed: true,
  position: 'pitcher',
  height: 193,
  backNumber: 17,
  // 1: 'A+', //학년: 점수
  // 2:'NP' //error
};

otani.position = '투수';
console.log(otani);
otani['height'] = 200;
console.log(otani['height']);
// otani['backNumber']=13  //error

// type vs.enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
  name: string;
  start(): void;
}
interface Car {
  name: string;
  color: string;
  price: number;
}

type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('Go~');
  },
  color: 'lime',
  price: 5000,
};

// 2. type
type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: Gender;
};
let daniel: Person = {
  name: 'daniel',
  age: 20,
  like: ['haerin', 'hani'],
  gender: 'F', //Gender 타입에 선언된 값만 넣을 수 있음
};

// interface 실습
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}
