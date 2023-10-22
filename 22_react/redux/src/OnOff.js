import React, { useState } from 'react';
import { on, off } from './store/onOffReducer';
import { useSelector, useDispatch } from 'react-redux';

export default function OnOff() {
  //   const light = useSelector((state) => state.light.light);
  const bgColor = useSelector((state) => state.light.bgColor);
  const fontColor = useSelector((state) => state.light.fontColor);
  const dispatch = useDispatch();
  const [turnLight, setTurnLight] = useState('OFF');

  return (
    <>
      <h3 style={{ background: bgColor, color: fontColor }}>
        Turn the Light {turnLight}
      </h3>
      <button onClick={() => dispatch(on(), setTurnLight('ON'))}>ON</button>
      <button onClick={() => dispatch(off(), setTurnLight('OFF'))}>OFF</button>
    </>
  );
}
