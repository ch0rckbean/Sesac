import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import App2 from './App2';
// import App3 from './App3';
import App4 from './App4';
import rootReducer from './store';
import Pr_Bank from './Pr_Bank';

// redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의: 전역 상태 관리 공간 (한 프로젝트에 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());
// reducer 객체, 확장 프로그램 연결 메소드

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App4 />
      <Pr_Bank />
    </Provider>
  </React.StrictMode>
);
