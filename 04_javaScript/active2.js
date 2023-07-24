console.log('connected!')

// 변수 선언: 변수 정의
// 변수 할당: = 연산자를 이용해 값을 넣음 
// 초기화: 변수 할당 첫 순간

// ### var
// - 선언 단계와 초기화 할당 단계가 동시에 진행이 되며, 초기화에는 undefined 값이 들어간다.
// - 중복 선언이 가능하며, 예기치 못한 값을 반환할 수 있음
// - 선언 이전에 참조하면 언제나 undefined를 반환한다.

// ### const
// - 재선언이 불가능하고, 재할당이 불가능하다.
// - 초반에 선언을 할 때 반드시 **초기화**를 동시에 진행해야 한다.

// ### let
// - let 키워드로는 변수 중복 선언이 불가능하지만, 재할당이 가능하다.

// 변수 선언 키워드 1. var
var a; //변수 선언 후 할당
console.log(a); // undefined: 값 미할당
a = 2;
console.log(a);
var a2=4; //변수 선언 + 할당
console.log(a2);


// var 변수 이상한 점 : 변수 선언 전 값 할당 가능
// 유지보수 시 최악 => var 지양 
aa=123;
console.log(aa); // 출력 됨

// 변수 선언 키워드 2. let
let b; //변수 선언
console.log(b);
b=7;
console.log(b);
let b2=77; //선언 + 할당
//재선언 불가
b2=78; //변수 값 재할당
// let b2=78; 에러 남: 중복 선언
console.log(b2);

// 변수 선언 키워드 3. const 
//  - 변수 선언, 할당 반드시 동시에 이뤄져야
//  - 상수 선언 시 사용
// const c; 할당 동시에 안 해서 에러 남
const c=3;
console.log(c);
// c=33; 상수라 재할당 불가해서 에러 남


// ///////////////////////////////////////////////
// 자료형 (data type)
// - Primitive: string, number, boolean, undefined, null ...
// - Object

//  1. string
//      텍스트 정보, 따옴표 감싸야 함
//      숫자, 특수문자도 따옴표 안에 포함되었다면 문자열
let text="안녕하세요";
let text2="하이";
let text3="하이루";
console.log(text,text2); //띄어쓰기 들어감
console.log(text+text2); //띄어쓰기 안 들어감

// 템플릿 리터럴(es6) :백틱 ` + $ {변수}
    // - 문자열 내 변수, 상수 간결 표현 가능
console.log(`${text} 저는 00입니다. 다시한번 ${text3}`);

// 2. number(숫자형)
// 정수, 실수. 연산 가능
let num=100;
let num2=0.2;
console.log(num + num2);
console.log(num - num2);
console.log(num / num2);
console.log(num * num2);

// 3. boolean(true, false)
let isWater=true;
let hasApple=false;
console.log(isWater, hasApple);

// 4. null : 빈 값 => 값 없음 의도적 명시 != undefined
let tmp=null;
console.log(tmp);

// 5. undefined: 값, 타입 모두 x
let x; //변수 선언만 했을 때 초기값으로 undefined 할당 됨
console.log(x);
