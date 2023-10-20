// 선택적 매개변수(?)는 맨 뒤에 있어야 함
function print(a: number, b: number, c?: number): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print(2, 4, 6); //2,4,6
print(2, 4); //2,4,undefined

function print2(a: number, b: number, c = 100): void {
  console.log(a);
  console.log(b);
  console.log(c);
}
print2(2, 4, 6); //2,4,6
print2(2, 4); //2,4,100

function sayHi(): void {
  console.log('Hi');
}
sayHi();

function sayHi2(): string {
  return 'Hi~2';
}
console.log(sayHi2());

function concatStr(x: string, y: string): string {
  return x + y;
}
console.log(concatStr('aa', 'bb'));

function circleArea(r: number): number {
  return r * r * Math.PI;
}
console.log(circleArea(4));

function sqrArea(x: number, y: number): number {
  return x * y;
}
console.log(sqrArea(3, 4));
console.log(sqrArea(3, 5));

//화살표 함수 & return 구문 생략
const triAre = (w: string, h: string): number =>
  parseInt(w, 10) * parseInt(h, 10) * 0.5;
console.log(triAre('3', '4'));

// interface 정의 시 함수 타입 표현
interface Greet {
  name: string;
  hi(): string;
  bye(a: number): string;
}
const sesac: Greet = {
  name: 'sesac',
  hi() {
    return '여기는 ' + this.name + '캠퍼스';
  },
  bye(a: number) {
    return `${a}번 안녕`;
  },
};
console.log(sesac.hi());
console.log(sesac.bye(4));

// never
// : 함수의 끝에 절대 도달하지 않는 경우
function goingOn(): never {
  while (true) {
    console.log('go');
  }
} //무한루프에 빠져 함수의 끝에 도달할 수 없음!

// 오버라이딩 vs. 오버로딩
//1. 오버라이딩 (overriding.js 참고)
// - Class에서 상속 > 하위 클래스가 상위 클래스의 메소드를 상속받을 때 같은 이름의 함수 재정의
//2. 오버로딩 (overloading)
// - 함수의 이름은 같지만, 매개변수 or 반환 타입 다른 여러 함수들 가질 수 있음

// typescript 오버로딩
// - 선언부 : 매개변수의 타입과 반환 타입만 지정
// - 구현부 : 실제 함수의 구현(function body)
// => '함수 이름 동일'
function sum(a: string, b: string): string; //선언부
function sum(a: number, b: number): number; //선언부
// function sum(a: string, b: number): string; //선언부

function sum(a: any, b: any): any {
  return a + b;
} //구현부

console.log(sum('가', '나'));
console.log(sum(20, 10));
// console.log(sum('가', 10)); //error
