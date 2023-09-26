import PropTypes from 'prop-types';

export default function FuncComponent(props) {
  const student = '하리보';
  const { name } = props;

  return (
    <div>
      <h1>Hi {student}</h1>
      <p>여기는 Function Component</p>
      <p>
        {/* 새로운 컴포넌트의 이름은 <b>{props.name}</b> */}
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

FuncComponent.defaultProps = {
  name: '젤리별',
};
FuncComponent.prototypes = {
  name: PropTypes.string,
};
