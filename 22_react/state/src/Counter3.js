import { useState } from "react";

function Counter3() {
  const [num, setNum] = useState(0);
  const Increase = () => {
    setNum(num + 1);
  };
  const Decrease = () => {
    setNum(num - 2);
  };

  return (
    <>
      <h1>{num}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </>
  );
}

export default Counter3;
