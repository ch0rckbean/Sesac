import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import App2 from './App2';
// redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

// state 초기값 정의
const initialState = {
  number: 50,
};

// reducer 정의: 변화를 일으키는 함수
const reducer = (state = initialState, action) => {
  // 파라미터: state(초기 디폴트 값 포함), action
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

// store 정의: 전역 상태 관리 공간 (한 프로젝트에 하나만!)
const store = configureStore({ reducer }, composeWithDevTools()); // reducer 객체, 확장 프로그램 연결 메소드

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>
);
