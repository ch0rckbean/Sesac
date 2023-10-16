import { useState } from 'react';
import './styles/Box.css';

function App() {
  const [num, setNum] = useState(100);
  const plus = () => setNum(num + 1);
  const minus = () => setNum(num - 1);

  return (
    <div className="App">
      <h1>Redux</h1>
      <Box1 num={num} plus={plus} minus={minus} />
    </div>
  );
}

const Box1 = ({ num, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box1: {num}</h2>
      <Box2 num={num} plus={plus} minus={minus} />
    </div>
  );
};
const Box2 = ({ num, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 num={num} plus={plus} minus={minus} />
    </div>
  );
};
const Box3 = ({ num, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 num={num} plus={plus} minus={minus} />
    </div>
  );
};
const Box4 = ({ num, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box4: {num}</h2>

      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
    </div>
  );
};

export default App;
