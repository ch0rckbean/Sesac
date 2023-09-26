import Button from './Button';
import './App.css';
import ClassComponent from './ClassComponenet';
import FuncComponent from './FuncComponent';
import Food from './Food';
import Book from './Book';
import Text from './Text';

function txt() {
  console.log('콘솔 띄우기 성공!');
}

function App() {
  return (
    <div className='App'>
      <ClassComponent name='목성' />
      <ClassComponent />
      <hr></hr>
      <FuncComponent name='화성' />
      <FuncComponent />
      <Button link='http://www.google.com' children='구글' />

      <h1>실습</h1>
      <Food whichFood='떡볶이' />
      <Food />
      <Book
        title='난 토마토 절대 안 먹어'
        author='ABC'
        price='9000'
        type='동화'
      />
      {/* <Text text='App에서 넘긴 text' valid={txt} /> */}
    </div>
  );
}

export default App;
