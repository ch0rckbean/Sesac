import { useState } from "react";

const Sayfunction = () => {
  console.log(useState("welcome!"));
  const [msg, setMsg] = useState("welcome!");
  // welcome!: 상태 초기값, 숫자/문자/배열 등 값의 형태 자유로움
  // msg: 메세지 상태
  // setMsg(): msg state 값 바꾸는 함수

  const onClickEnter = () => {
    setMsg("선수입장");
  };
  const onClickExit = () => {
    setMsg("선수퇴장");
  };
  return (
    <>
      {/* 
        - HTML : onclick="onClickEvent()" -> 문자열 형식 호출문 등록
        - JS : addEventListener('click',onClickEvent) 
                -> 괄호를 없애, 함수를 바로 실행하지 않고 클릭 발생 시 함수 호출되도록
        - React: onclick={onClickEvent} -> JS와 동일
    */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickExit}>퇴장</button>
      <h1>{msg}</h1>
    </>
  );
};

export default Sayfunction;
