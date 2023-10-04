import RefSample1 from "./RefSample1";
import RefSample2 from "./RefSample2";
import RefSample3 from "./RefSample3";
import RefSample4 from "./RefSample4";

function App() {
  return (
    <div className="App">
      {/* 함수형 컴포넌트; userRef()로 DOM 요소에 직접 접근 */}
      <RefSample1 />

      {/* 함수형 컴포넌트; userRef()로 로컬변수 사용 */}
      <hr></hr>
      <br></br>
      <RefSample2 />

      {/* 클래스형 컴포넌트; ref 사용방법 1. 콜백함수*/}
      <hr></hr>
      <br></br>
      <RefSample3 />

      {/* 클래스형 컴포넌트; ref 사용방법 2. createRef()*/}
      <hr></hr>
      <br></br>
      <RefSample4 />
    </div>
  );
}

export default App;