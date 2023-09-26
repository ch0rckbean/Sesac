function Button(props) {
  const { children, link } = props;
  return (
    <>
      <a href={link}>
        <button
          style={{
            backgroundColor: 'palegreen',
            width: '80px',
            height: '30px',
            border: 'none',
            borderRadius: '5px',
            margin: '0 4px',
          }}
        >
          {children}
        </button>
      </a>
    </>
  );
}
export default Button;
