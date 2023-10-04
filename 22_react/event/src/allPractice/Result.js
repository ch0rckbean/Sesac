function Result(props) {
  // const { img, color, bgColor, text } = props;
  const { fruit, color, background, content } = props;
  console.log("props", props);

  return (
    <div style={{ display: "block" }}>
      {/* <img src={img} width={100} height={100} alt="img" /> */}
      <img src={`${fruit}.png`} width={100} height={100} alt="img" />

      <div
        // style={{
        //   padding: '10px',
        //   marginTop: '10px',
        //   backgroundColor: bgColor,
        //   color: color,
        // }}
        style={{
          padding: "10px",
          marginTop: "10px",
          backgroundColor: background,
          color: color,
        }}
      >
        {/* {text} */}
        {content}
      </div>
    </div>
  );
}

export default Result;
