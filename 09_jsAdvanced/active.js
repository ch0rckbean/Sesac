//구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당 시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);

const [A, B, C] = arr2;
console.log(A, B, C);

let x = 1;
let y = 3;
console.log('Swap 전', x, y);
//Swap
[x, y] = [y, x];
console.log('Swap 후', x, y);

const lists = ['grape', 'kiwi'];
[f1, f2, f3 = 'orange'] = lists;
// console.log(f1,f2,f3) //undefined
console.log(f1, f2, f3);

//2. 객체 구조 분해 할당
// - 변수 선언 순서 중요 x
// - 키 값과 변수명 일치해야 함
const obj = {
  title: '엘리멘탈',
  content: '감동적이에요',
  score: 1000000,
};

//객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.score);
console.log(obj['title'], obj['content'], obj['score']);

//객체 구조 분해 쓰고 싶다면
//key가 존재 x 때를 대비해'='연산자 사용하면 default값 할당
const { score, title, content, star = '별 다섯개' } = obj;
console.log(title, content, score, star);

//콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다.
const { title: t2, score: s2, content: c2 } = obj;
console.log(t2, c2, s2);

//퀴즈1
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part}개발을 공부합니다. 수업의 리더는 ${leader}입니다.`;
  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

console.clear();
///////////////////////
//spread 연산자
//반복 가능한 객체에 대해 단일 요소로 압축을 해제하는 역할

//speread in arr
const a = [1, 2, 3];
const b = [5, 4];
console.log(...a, ...b);

//spread in string
const c = [...'Hello']; //[ 'H', 'e', 'l', 'l', 'o' ]
const d = 'Hello'.split(''); //[ 'H', 'e', 'l', 'l', 'o' ]
const e = 'Hello'.split(' '); //[ 'Hello' ]
console.log(c);
console.log(d);
console.log(e);

//spread in object
const chip = {
  base: 'chip',
  company: 'mola',
};
const potatoChip = {
  //   base: "chip",
  //   company: "mola",
  ...chip,
  flavor: 'potato',
};
const chocoChip = {
  //   base: "chip",
  //   company: "mola",
  ...chip,
  flavor: 'choco',
};
console.log(chip);
console.log(potatoChip);
console.log(chocoChip);

//퀴즈 : 두 문자열 합쳐서 배열로 만들기
const world1 = 'abc';
const world2 = 'xyz';
const res = [...world1, ...world2];
console.log(res);

const vals = [10, 20, 30, 40, 50, 60, 100];
function get(a, b, ...rest) {
  //rest는 항상 마지막에 있어야 함
  console.log('a: ', a); //10
  console.log('b: ', b); //20
  console.log('rest: ', rest); // [30,40,50,60,100]
}
get(...vals);

//2. 객체에서 rest
const iceCream = {
  company: 'haetae',
  flavor: 'yogurt',
  price: 1000,
};
const { flavor, ...rest } = iceCream;
console.log(flavor); //yogurt
console.log(rest); //{ company: 'haetae', price: 1000 }

//3. 배열에서 rest
const num = [1, 2, 3, 4, 5, 6, 9];
const [one1, two1, ...rest2] = num;
console.log(one1, two1, rest2); //1 2 [ 3, 4, 5, 6, 9 ]

console.clear();
/////////////////////////
// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어보자!
/* 
속성: 
    만들어진 연도(Number)
    집의 이름(String)
    창문 갯수(Number)
메서드:
    2023 - 만들어진 연도 콘솔창에 출력하는 "건물의 나이 메소드"
    창문의 갯수 콘솔창에 출력하는 메소드
*/

//클래스 정의
class House {
  //생성자 함수: 클래스 이용해 객체 생성 시마다 속성 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }
  //메서드 1: 집 나이 출력
  getAge() {
    console.log(`${this.name}는 건축한 지 ${2023 - this.year}년 되었어요.`);
  }
  //메서드 2: 집 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개입니다.`);
  }
}
//클래스 이용해 객체 생성
const house1 = new House(2023, '유엔빌리지', 5);
console.log('house1', house1);
console.log(typeof house1);
console.log(house1.year);
console.log(house1.name);
house1.getWindow();
house1.getAge();

//house2 :2007년에 지어진 "자이"고 창문 10개
const house2 = new House(2007, '자이', 10);
house2.getAge();
house2.getWindow();

//실습3
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(this.width * this.height);
    // return this.width * this.height;
  }
}
const rec1 = new Shape(3, 4);
rec1.getArea(3, 4);

//클래스 상속
//부모 클래스 : House
//자식 클래스 : Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    //부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }
  getAptInfo() {
    return `${this.year}년도에 지어진 ${this.name}아파트의 총 층수는 ${this.floor}층이며, 창문의 개수는 ${this.window}개입니다.`;
  }
  //오버라이딩
  // - 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name}아파트의 ${this.window}개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}
const apt1 = new Apartment(2022, '래미안', 13, 20, 'kcc');
console.log(apt1);
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());

console.clear();
//실습 클래스 상속
class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return `이 사각형의 넓이는 ${this.width * this.height}입니다.`;
  }
  getN() {
    return `이 사각형의 대각선 길이는 ${Math.sqrt(
      this.width ** 2 + this.height ** 2
    )}입니다.`;
  }
}
const rec2 = new Rectangle(6, 6);
console.log(rec2.getArea());
console.log(rec2.getN());

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
  getArea() {
    return `이 삼각형의 넓이는 ${(this.width * this.height) / 2}입니다.`;
  }
}
const tr1 = new Triangle(3, 4);
console.log(tr1.getArea());

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return `이 원의 넓이는 ${this.radius ** 2 * Math.PI}입니다.`;
  }
}
const c1 = new Circle(3, 3, 3);
console.log(c1.getArea());

//////////////////////
// 단축 평가
// &&, ||

// A && B : 두 개의 피연산자 모두 T면 T 반환
// A || B : 두 개의 피연산자 중에서 하나만 T여도 T 반환

console.log(true && true); //t
console.log(false && true); //f

console.log(true || true); //t
console.log(false || true); //t

const xx = 5;
const yy = 7;

//삼항 연산자 예시
const result1 = xx > yy ? 'xx가 더 큼' : 'yy가 더 큼';

// 단축평가(&&, 논리곱)
const result2 = xx > yy && 'xx가 더 큼';
console.log(result2); //false - 첫번째 데이터부터 False이므로

const result3 = xx < yy && 'yy가 더 큼';
console.log(result2); //yy가 더 큼 - 첫번째 데이터가 True이므로 끝까지 실행

// 단축평가(||, 논리합)
const result4 = xx || 100;
console.log(result4); //5 - 5는 truthy이므로 바로 5 출력

const nameEx = '홍길동';
const nameEx2 = null;
console.log(nameEx || '이름없음');
console.log(nameEx2 || '이름없음');
