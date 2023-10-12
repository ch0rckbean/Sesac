import './App.js';
import CssModuleComponents from './CssModuleComponents.js';
import SassComponent from './SassComponent.js';
import StyledComponent from './styles/StyledComponent.js';
// 실습
import Caterpillar from './Caterpillar.js';
import CircleAnimation from './CircleAnimation.js';
import Scenery from './Scenery.js';

function App() {
  return (
    <div className='App'>
      <h1>React Style</h1>
      <h2>CSS Module</h2>
      <CssModuleComponents />
      <h2>SASS</h2>
      <SassComponent />
      <h2>StyledComponent</h2>
      <StyledComponent />

      <hr></hr>
      <br></br>
      <h1>실습</h1>
      <br></br>
      {/* <Caterpillar /> */}
      <br></br>
      {/* <CircleAnimation /> */}
      <br></br>
      <Scenery />
    </div>
  );
}

export default App;
