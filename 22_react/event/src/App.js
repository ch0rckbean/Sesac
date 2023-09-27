import "./App.css";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import SyntheticEvt from "./SyntheticEvt";

function App() {
  return (
    <div className="App">
      <SyntheticEvt />
      <ClassBind />
      <Counter />
    </div>
  );
}

export default App;
