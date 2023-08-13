const fruits = ["grape", "apple", "tanghooroo"];
const [gr, ap, ta, st = "strawberry"] = fruits;
console.log(gr, ap, ta, st); //grape apple tanghooroo strawberry

const snack = {
  name: "감자톡",
  flavor: "매콤맛",
  price: 1700,
};
const { name: n, flavor: f, price: p } = snack;
// console.log(name, flavor, price); //감자톡 매콤맛 1700
console.log(n, f, p); //감자톡 매콤맛 1700

let a = 1;
let b = 2;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);

console.clear();

const c = [1, 2, 3];
const d = [4, 5];
console.log(...c, ...d);

const A = "HELLO";
console.log(...A); //H E L L O
console.log([...A]); //[ 'H', 'E', 'L', 'L', 'O' ]

const chip = {
  base: "chip",
  company: "mola",
};
const potatoChip = {
  ...chip,
  flavor: "potato",
};
console.log(potatoChip);

const vals = [10, 20, 30, 40, 50, 60, 100];
function get(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log(rest);
}
get(...vals);

const iceCream = {
  company: "haetae",
  flavor: "yogurt",
  price: 1000,
};
const { flavor, ...rest } = iceCream;
console.log(flavor);
console.log(rest);

console.clear();
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
class House {
  constructor(year, name, wdw) {
    this.year = year;
    this.name = name;
    this.wdw = wdw;
  }
  getAge() {
    console.log(2023 - this.year);
  }
}
const xi = new House(2022, "자이", 2);
xi.getAge();

class Apartment extends House {
  constructor(year, name, wdw, floor, wdwMaker) {
    super(year, name, wdw);
    this.floor = floor;
    this.wdwMaker = wdwMaker;
  }
  getAge() {
    console.log(
      `${this.name} 아파트는 ${this.year}에 지어져 ${this.wdwMaker}에서 창문을 시공했다.`
    );
  }
}
const A1 = new Apartment(2023, "XI", 4, 5, "샷시");
A1.getAge();
