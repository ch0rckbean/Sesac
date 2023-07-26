//조건문

if (5 > 4) {
  console.log("얍");
}
// let num = Number(prompt("숫자를 입력해 주세요!"));

// if (num > 10) {
//   alert("입력한 수는 10보다 크군요");
// } else if (num === 10) {
//   alert("입력한 수는 10과 같군요");
// } else {
//   alert("입력한 수는 10보다 작군요");
// }

// if (num > 100 || num < 0) {
//   alert("입력값이 잘못되었습니다. 숫자의 범위는 0~100까지 입니다.");
// } else if (num >= 90) {
//   alert("A");
// } else if (num >= 80) {
//   alert("B");
// } else if (num >= 70) {
//   alert("C");
// } else if (num >= 60) {
//   alert("D");
// } else {
//   alert("F");
// }

// let age = prompt("나이를 입력하세요");
// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else if (age >= 0) {
//   console.log("유아");
// }

//중첩 if문
let userId = "user01";
let userPw = "1234";

// id, pw 검사하는 함수
// function loginUser() {
//   let inputId = prompt("ID 입력");
//   let inputPw = prompt("PW 입력");

//userId == inputId 라면
// - userPw, inputPw 비교
//inputId 에 빈 값 입력됐다면
// - "아이디 입력 안 함" 문구 반환
//두 경우 아니라면
// - "아이디 틀림" 문구 반환

//   if (userId == inputId) {
//     if (userPw == inputPw) {
//       return "로그인 성공";
//     } else {
//       return "비번 오류! 로그인 실패";
//     }
//   } else if (inputId == "" || null) {
//     return "아이디 입력 안 함";
//   } else {
//     return "아이디 틀림";
//   }
// }

// const res = loginUser();
// alert(res);

//switch 문
//  - default 필수는 아니지만 쓰기 권장
let a = 7;
switch (a) {
  //   case 1:
  //   case 2:
  // 코드 안 쓰면 a=1,2 모두 case 3 구문 실행 됨
  case 3:
    console.log("a가 3이군요");
    break;
  case 4:
    console.log("a가 4군요");
    break;
  case 5:
    console.log("a가 5군요");
    break;
  default:
    console.log("a가 무슨 값인지 모르겠습니다.");
}

//학점을 switch문으로
// let score = Number(prompt("점수를 입력하시오"));
// switch (parseInt(score / 10)) {
//   case 10:
//     alert("A+");
//     break;
//   case 9:
//     alert("A");
//     break;
//   case 8:
//     alert("B");
//     break;
//   case 7:
//     alert("C");
//     break;
//   case 6:
//     alert("D");
//     break;
//   default:
//     alert("F");
// }

//삼항 연산자
let num = 5;
num % 2 != 1 ? console.log("짝수") : console.log("홀수");

let now = new Date().getHours();
now >= 12 ? console.log("오후") : console.log("오전");
