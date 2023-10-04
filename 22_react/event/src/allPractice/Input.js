function Input(props) {
  // const { setText } = props;
  const setData = props.setData;
  const handleInput = (e) => {
    const content = e.target.value;
    setData((data) => {
      // return { ...data, content: content };
      return { ...data, content }; //key, value 같으면 value 생략 가능
    });
  };

  return (
    <>
      내용 :
      {/* <input
        type='text'
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder='내용을 입력하세요.'
      /> */}
      <input
        type="text"
        onChange={handleInput}
        placeholder="내용을 입력하세요."
      />
    </>
  );
}

export default Input;
