import { useState } from 'react';

export default function useColor(initVal = 'rgb(100,100,100)') {
  const [val, setVal] = useState(initVal); //초기 색상 저장

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setVal(`rgb(${r},${g},${b})`);
    console.log('rgb', val);
  };
  return [val, changeColor];
}
