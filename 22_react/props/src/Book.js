import imgPath from './book.jpeg';

function Book(props) {
  const { title, author, price, type } = props;
  return (
    <div className='Book'>
      <img src={imgPath} alt={title} />
      <h2>{title}</h2>
      <p>저자: {author}</p>
      <p>판매가: {price}</p>
      <p>구분: {type}</p>
    </div>
  );
}

export default Book;
