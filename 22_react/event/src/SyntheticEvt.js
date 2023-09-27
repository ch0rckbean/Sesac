export default function SyntheticEvt() {
  function syntheticEvt(e) {
    console.log("Synthetic Event 버튼 클릭");
    console.log(e);
    // 콘솔에 찍히는 e 객체 : 합성 이벤트
    // 브라우저마다 이벤트 이름, 종류 등 이벤트 처리 방식 다르기에
    // 이를 동일하게 처리하기 위해 React에서 쓰는 이벤트 객체
  }
  function printInputVal(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <button onClick={syntheticEvt}>SyntheticEvent 콘솔 찍기</button>
      <br></br>
      <input type="text" placeholder="입력 구다사이" onChange={printInputVal} />
    </>
  );
}
