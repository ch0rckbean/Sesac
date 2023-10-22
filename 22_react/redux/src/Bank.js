import React, { useState } from 'react';
// redux 사용을 위한 Hook 호출
import { useSelector, useDispatch } from 'react-redux';
// 동작을 위한 reducer로부터의 함수 호출
import { add, sub } from './store/moneyReducer';

export default function Bank() {
  const money = useSelector((state) => state.bank.money);
  const dispatch = useDispatch();
  const [inputMoney, setInputMoney] = useState(0);

  return (
    <div>
      <h3>은행~~</h3>
      잔금: {money} <br></br>
      <input
        type='text'
        placeholder='금액 입력'
        onChange={(e) => setInputMoney(Number(e.target.value))}
        value={inputMoney}
      />
      <br></br>
      <button onClick={() => dispatch(add(inputMoney))}>입금</button>
      <button onClick={() => dispatch(sub(inputMoney))}>출금</button>
    </div>
  );
}
