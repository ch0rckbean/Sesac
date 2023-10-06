import React, { useReducer } from 'react';

export default function UseReducerEx() {
  // reducer: state를 업데이트 하는 함수
  // dispatch: 액션(state가 어떻게 변경되어야 하는지에 대한 힌트) 발생 시키는 함수
  // state: 현재 상태
  const initState = { value: 0 }; //초기 상태 값
  const reducer = (prevState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { value: prevState.value + 1 };
      case 'DECREMENT':
        return { value: prevState.value - 1 };
      case 'RESET':
        return initState;
      default:
        return { value: prevState.value };
    }
  };
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <>
      <h1>UseReducerEx</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>PLUS</button>
      <button onClick={decrement}>MINUS</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}
