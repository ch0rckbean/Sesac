import { useState } from "react";

export default function ColorChange() {
  const [color, setColor] = useState("검정색");
  const [enColor, setEnColor] = useState("black");

  function toRed() {
    setColor("빨간색");
    setEnColor("red");
  }

  function toBlue() {
    setColor("파란색");
    setEnColor("blue");
  }
  return (
    <>
      <h3 style={{ color: enColor }}>
        <span>{color}</span> 글씨
      </h3>
      <button onClick={toRed}>빨간색</button>
      <button onClick={toBlue}>파란색</button>
    </>
  );
}
