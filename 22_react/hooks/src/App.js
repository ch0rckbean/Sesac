import UseMemoEx from './Components/UseMemoEx';
import UseCallbackEx from './Components/UseCallbackEx';
import UseCallbackEx2 from './Components/UseCallbackEx2';
import UseReducerEx from './Components/UseReducerEx';
import useTitle from './customHooks/useTitle';
import useToggle from './customHooks/useToggle';
import Login from './Components/Login';

function App() {
  useTitle('React Hooks 연습중입니당');
  return (
    <div className='App'>
      <UseMemoEx />
      <UseCallbackEx />
      <UseCallbackEx2 postId={7} />
      <UseReducerEx />
      <Login />
    </div>
  );
}

export default App;
