function Result(props) {
  const { img, color, bgColor, text } = props;
  console.log('props', props);

  return (
    <div style={{ display: 'block' }}>
      <img src={img} width={100} height={100} alt='img' />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: bgColor,
          color: color,
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Result;
