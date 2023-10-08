import React, { useReducer, useState } from 'react';

export default function Login() {
  const sol = {
    id: 'apple',
    pw: 'pw',
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const reducer = (prevState, action) => {
    switch (action.type) {
      // 둘 다 정답, id만 정답, pw만 정답, 둘 다 오답
      case 'SUCCESS':
        return { isLogin: true, msg: `환영합니다~ ${sol.id}님!` };
      case 'ID_SUCCESS':
        return { isLogin: false, msg: 'ID 오류' };
      case 'PW_SUCCESS':
        return { isLogin: false, msg: 'PW 오류' };
      case 'FAIL':
        return { isLogin: false, msg: 'ID, PW 오류' };
      case 'LOGOUT':
        return { isLogin: false, msg: '로그아웃!' };
      default:
        return { isLogin: false, msg: '' };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    isLogin: false,
    msg: '',
  });

  const Login = () => {
    setId('');
    setPw('');
    if (id === sol.id && pw === sol.pw) {
      success();
    } else if (id !== sol.id && pw === sol.pw) {
      id_success();
    } else if (id === sol.id && pw !== sol.pw) {
      pw_success();
    } else if (id !== sol.id && pw !== sol.pw) {
      fail();
    }
  };
  const success = () => {
    dispatch({ type: 'SUCCESS' });
  };
  const id_success = () => {
    dispatch({ type: 'ID_SUCCESS' });
  };
  const pw_success = () => {
    dispatch({ type: 'PW_SUCCESS' });
  };
  const fail = () => {
    dispatch({ type: 'FAIL' });
  };

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h1>Login</h1>
      <p>정답 아이디: apple | 정답 비번: pw</p>
      {!state.isLogin ? (
        <>
          ID
          <input
            type='text'
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder='ID'
          ></input>
          <br></br>
          PW
          <input
            type='password'
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder='PW'
          ></input>
          <br></br>
          <button type='button' onClick={Login}>
            로그인
          </button>
          <br></br>
          <br></br>
          <div>{state.msg}</div>
        </>
      ) : (
        <>
          <div>{state.msg}</div>
          <button onClick={logOut}>로그아웃</button>
        </>
      )}
    </div>
  );
}
