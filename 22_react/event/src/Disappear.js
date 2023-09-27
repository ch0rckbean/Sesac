import { useState } from "react";

function Disappear() {
  const [is, setIs] = useState("block");
  const disappear = () => {
    setIs("none");
  };
  return (
    <>
      <button onClick={disappear}>사라져라</button>
      <h1 style={{ display: is }}>안녕하세요</h1>
    </>
  );
}

export default Disappear;
