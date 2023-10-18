import './styles/Box.css';
// redux
import { useSelector, useDispatch } from 'react-redux';

function App3() {
  const number = useSelector((state) => state.counter.number);

  return (
    <div className="App">
      <h1>Redux</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 </h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2</h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3</h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const number = useSelector((state) => state.counter.number);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4: {number}</h2>
      <h2>isVisible 값: {isVisible ? '참' : '거짓'}</h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>

      {/* 퀴즈: CHANGE 버튼 클릭 시 '참','거짓' 글자 토글 */}
      <button onClick={() => dispatch({ type: 'CHANGE' })}>CHANGE</button>
    </div>
  );
};

export default App3;
