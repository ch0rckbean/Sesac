import React from 'react';
import useToggle from './customHooks/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  return (
    <>
      <h1>custom Hook (useToggle) </h1>
      <div onClick={setIsFaqOpen}>Q. 지금 시각은?</div>
      {isFaqOpen && <div>A. 6시 33분</div>}
    </>
  );
}
