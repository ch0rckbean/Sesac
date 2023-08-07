console.log("nodejs로 js 파일을 읽었어요");

function multi(n) {
  for (let i = 1; i < 10; i++) {
    console.log(`${n}*${i}=${n * i}`);
  }
  return `${n}단입니다.`;
}

console.log(multi(7));
