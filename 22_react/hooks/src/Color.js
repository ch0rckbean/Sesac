import React from 'react';
import useColor from './customHooks/useColor';

export default function Color() {
  const [color, setColor] = useColor();
  console.log(color); //rgb(100,100,100)
  //   console.log(setColor); //changeColor() 출력
  // useColor에서 changeColor 함수 작성 => setColor로 대신 작동

  return (
    <>
      <h2>Change Color!</h2>
      <p>초기 색상: 회색</p>
      <p>랜덤 색상: {color}</p>
      <h2
        style={{ background: `${color}`, width: '200px', textAlign: 'center' }}
      >
        Color
      </h2>
      <button onClick={setColor}>Change Color!</button>
    </>
  );
}
