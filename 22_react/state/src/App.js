import "./App.css";
import Counter from "./Counter";
import Sayfunction from "./SayFunction";
import CounterFunc from "./CounterFunc";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";

function App() {
  return (
    <div className="App">
      <Counter />
      <hr></hr>
      <Sayfunction />
      <CounterFunc value={"Plus 1"} />
      <Counter2 />
      <Counter3 />
    </div>
  );
}

export default App;
