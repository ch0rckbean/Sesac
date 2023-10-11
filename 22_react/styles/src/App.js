import './App.js';
import CssModuleComponents from './CssModuleComponents.js';
import SassComponent from './SassComponent.js';

function App() {
  return (
    <div className="App">
      <h1>React Style</h1>
      <h2>CSS Module</h2>
      <CssModuleComponents />
      <h2>SASS</h2>
      <SassComponent />
    </div>
  );
}

export default App;
