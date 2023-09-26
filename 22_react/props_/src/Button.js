import './Button.css';

const Button = (props) => {
  const { link, children } = props;
  return (
    <a href={link}>
      <Button className='btn'>{children}</Button>
    </a>
  );
};
export default Button;
