import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
