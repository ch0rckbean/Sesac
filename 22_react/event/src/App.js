import { useState } from "react";
import "./App.css";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import SyntheticEvt from "./SyntheticEvt";
import Handler_ex from "./Handler_ex";
import ColorChange from "./ColorChange";
import Disappear from "./Disappear";
import Input from "./allPractice/Input";
import Result from "./allPractice/Result";
import Select from "./allPractice/Select";

function App() {
  // 상태
  const [data, setData] = useState({
    fruit: "apple",
    background: "black",
    color: "white",
    content: "text",
  });

  // 기본값 설정
  // const [img, setImg] = useState('allPractice/apple.png');
  // const [bgColor, setBgColor] = useState('black');
  // const [color, setColor] = useState('white');
  // const [text, setText] = useState('글자글자');

  return (
    <div className="App">
      <SyntheticEvt />
      <ClassBind />
      <Counter />
      <hr></hr>
      <h1>실습</h1>
      <Handler_ex />
      <ColorChange /> <br></br>
      <br></br>
      <Disappear />
      <hr></hr>
      <h1>All Practice </h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {/* 상태 변경하는 set 함수 전해줌 */}
        {/* <Select setImg={setImg} setBgColor={setBgColor} setColor={setColor} /> */}
        <Select setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {/* <Input setText={setText} /> */}
        <Input setData={setData} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {/* 변경된 상태 == 변수 전해줌 */}
        {/* <Result img={img} bgColor={bgColor} color={color} text={text} /> */}
        <Result data={data} />
      </div>
    </div>
  );
}

export default App;
