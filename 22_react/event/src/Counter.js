import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  const Increase = () => {
    setNum(num + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg}~ 현재 숫자는 ${num}입니다.`);
  };

  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg}~ 현재 숫자는 ${num}입니다.`);
  };

  // e.target은 부모로부터 이벤트가 위임되어 발생하는 자식 위치, 내가 클릭한 자식 요소
  // currentTarget은 이벤트 핸들러가 있는 요소
  const handleEvt = (e) => {
    console.log(e.target); //<span>handleEvt</span>
    console.log(e.currentTarget);
    // <button onClick={handleEvt}>
    // <span>handleEvt</span>
    // </button>
  };

  return (
    <>
      <h1>Number Counter</h1>
      <h2>{num}</h2>

      {/* 함수에 인자가 없는 경우: 함수 이름만 전달 */}
      <button onClick={Increase}>더하기</button>

      {/* 함수에 인자 보내기 */}
      <button
        onClick={() => {
          alertMsg("hello!");
        }}
      >
        alert 출력
      </button>
      <button onClick={(e) => consoleMsg(e, "consoleMsg")}>console 출력</button>

      {/* e.target VS e.currentTarget */}
      <button onClick={handleEvt}>
        <span>handleEvt</span>
      </button>
    </>
  );
};

export default Counter;
