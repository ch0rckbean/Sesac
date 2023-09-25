export default function Foood(props) {
  const { whichFood } = props;
  return (
    <p>
      내가 좋아하는 음식은 <span style={{ color: 'red' }}>{whichFood}</span>
    </p>
  );
}

Foood.defaultProps = {
  whichFood: '기본 음식',
};
