import PropTypes from 'prop-types';
function FuncComponent(props) {
  const { name } = props;
  const student = '트롤리';
  return (
    <>
      console.log('this.props', this.props);
      <div>
        <h1>Hi {student}</h1>
        <p>여기는 Class Component</p>
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    </>
  );
}

FuncComponent.defaultProps = {
  name: '젤리별',
};
FuncComponent.propTypes = {
  name: PropTypes.string,
};

export default FuncComponent;
