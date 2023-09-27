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
  const [img, setImg] = useState("apple");
  const [bgColor, setBgColor] = useState("black");
  const [color, setColor] = useState("white");
  const [text, setText] = useState("글자글자");

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
      <h1>실습</h1>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Select setImg={setImg} setBgColor={setBgColor} setColor={setColor} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Input />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <Result img={img} bgColor={bgColor} color={color} text={text} />
      </div>
    </div>
  );
}

export default App;
