import imgPath from './book.jpeg';
function Book(props) {
  const { title, author, price, type } = props;
  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '100px',
          width: '300px',
          backgroundColor: 'beige',
        }}
      >
        <h2 style={{ color: 'orange' }}>이번주 베스트셀러</h2>
        <img src={imgPath} alt='book'></img>
        <h2>{title}</h2> <br></br>
        <h3>저자: {author}</h3> <br></br>
        <h3>판매가: {price}</h3> <br></br>
        <h3>구분: {type}</h3> <br></br>
      </div>
    </>
  );
}
export default Book;
