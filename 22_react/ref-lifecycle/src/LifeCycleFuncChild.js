import React, { useEffect, useState } from 'react';

// 자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // // 1. Mount 시점에 실행
  // useEffect(() => {
  //   console.log('컴포넌트 마운트!'); // index.js의 <React.StrictMode /> - 두 번 찍힘
  // }, []);
  // // 2. Unmount 시점에 실행
  // useEffect(() => {
  //   console.log('컴포넌트 언마운트!');
  // }, []);

  // // 3. Mount | 업데이트 시점에 실행
  // useEffect(() => {
  //   console.log('컴포넌트 마운트 or 업데이트!!');
  // });

  //  // 4. input 상태가 업데이트 될 때 실행
  // useEffect(() => {
  //   console.log('마운트 | input 상태가 변경 될 때마다 컴포넌트 업데이트');
  // }, [input]);

  return (
    <div style={{ background: 'aqua' }}>
      자식 컴포넌트 <br></br>
      <div>현재 Number 값은 {number}입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
