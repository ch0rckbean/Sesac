import UseMemoEx from './Components/UseMemoEx';
import UseCallbackEx from './Components/UseCallbackEx';
import UseCallbackEx2 from './Components/UseCallbackEx2';
import UseReducerEx from './Components/UseReducerEx';
import Login from './Components/Login';
// Custom Hooks
import useTitle from './customHooks/useTitle';
import Faq from './Faq';
import Color from './Color';
// Hook-form
import Form from './Components/react-hook-form/Form';

function App() {
  useTitle('React Hooks 연습중입니당');
  return (
    <div className="App">
      <UseMemoEx />
      <UseCallbackEx />
      <UseCallbackEx2 postId={7} />
      <UseReducerEx />
      <Login />
      <Faq />
      <Color />
      <Form />
    </div>
  );
}

export default App;
