import React, { useState, useMemo } from 'react';

// 메모이제이션으로 수행한 연산의 결과 값을 기억함으로써 불필요한 연산 최소화
export default function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  //임의의 큰 연산을 하는 함수
  //버튼을 누를 때만 실행되는데, input을 입력할 때도 연산이 이뤄지고 있음 <=console 찍힘
  //useMemo 렌더링 과정에서 **특정 값을 기억**해서 바뀔 때만 연산되도록 최적화 가능

  // [before]
  //   const calc=()=>{
  //     console.log('calc ing')
  //     for(let i=0; i<1000000000; i++){}
  //     return count**2;
  //   }

  // [after]
  // count의 값이 바뀔 때에만 함수 실행
  // input 상태 바뀌면 컴포넌트 리렌더링 되지만, calc는 연산 되지 않음
  // useEffect와의 차이
  // - useMemo: 값 기억 + 재사용 목적
  // - useEffect: 재 렌더링 목적

  const calc = useMemo(() => {
    console.log('calc ing');
    for (let i = 0; i < 1000000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <div>
      <h1>UseMemoEx</h1>
      <input type="text" onChange={(e) => setInput.target.value}></input>
      <button onClick={() => setCount(count + 1)}>PLUS</button>
      <p>count: {count}</p>
      <p>calc: {calc}</p>
    </div>
  );
}
