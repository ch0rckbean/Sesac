function Input() {
  return (
    <>
      내용 :
      <input
        type="text"
        onChange={(e) => {
          setText(e.target);
        }}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
