function Food(props) {
  const { whichFood } = props;
  return (
    <>
      <p>
        제가 좋아하는 음식은 <span style={{ color: 'red' }}>{whichFood}</span>
        입니다.
      </p>
    </>
  );
}

Food.defaultProps = {
  whichFood: '기본 음식',
};
export default Food;
