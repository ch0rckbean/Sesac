import { useRef, useState } from "react";

export default function RefSample2() {
  const id = useRef(7); //초기값
  const [num, setNum] = useState(10);

  const plusIdRef = () => {
    id.current += 1;
    console.log(id.current);
  };

  const plusNumState = () => {
    setNum(num + 1);
  };
  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭 시 id값을 1씩 증가 시켜보자!</p>
      <h2>{id.current}</h2>
      <button onClick={plusIdRef}>Plus</button>

      <p>state 변경 시 ref와 달리 값 변경 시마다 리렌더링 확인</p>
      <h2>{num}</h2>
      <button onClick={plusNumState}>Plus</button>
    </>
  );
}
