import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';
import Foood from './Food';
import Book from './Book';

function App() {
  return (
    <div className='App'>
      <FuncComponent name='지구' />
      <FuncComponent />
      <hr />
      <ClassComponent name='화성' />
      <ClassComponent />
      <hr />
      <Button link='http://www.google.com'>Google</Button>

      <h1>실습</h1>
      <Foood whichFood='떡볶이' />
      <Foood />
      <Book
        title='난 토마토 절대 안 먹어!'
        author='로렌 차일드'
        price='9000'
        type='동화책'
      />
    </div>
  );
}

export default App;
