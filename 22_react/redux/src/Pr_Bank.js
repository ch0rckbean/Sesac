import React, { useState } from 'react';

export default function Pr_Bank({ money, onAdd, onSub }) {
  const [howMuch, setHowMuch] = useState(0);
  //   console.log('howMuch', howMuch);

  return (
    <div>
      <h1>실습</h1>
      <h2>잔액: {money}원</h2>
      <input
        type="number"
        value={howMuch}
        onChange={(e) => setHowMuch(e.target.value)}
      />
      <button onClick={onAdd}>입금</button>
      <button onClick={onSub}>출금</button>
    </div>
  );
}
