import './App.css';
import Larva from './larva';

function App() {
  const name = 'bean';
  const student = 'sesac';
  const styles = {
    backgroundColor: 'yellow',
    color: 'aqua',
    fontSize: '48px',
  };
  const name1 = '쫀도기';
  const animal = '강아지';
  const a = 11;
  const b = 5;

  return (
    <div className='App'>
      {/* 1. JSX 문법
          하나로 감싸인 요소 
          2. js 문법 사용 
              - {}로 감싸면 js 표현식 사용 가능
              - {}안에서 삼항 연산자 사용 가능(if, for문 사용 불가)
      */}
      <>
        <div>{name} 안녕</div>
        <div>
          {student === 'sesac' ? <span>새싹맞음</span> : <span>새싹아님</span>}
        </div>

        {/*   3.style 속성
         - 리액트에서 dom 요소에 스타일 적용시 문자열 x-> 객체 사용
        - 스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성 
        */}
        <div style={styles}>스타일 적용</div>
        <div
          style={{
            backgroundColor: 'navy',
            color: 'orangered',
            fontSize: '48px',
          }}
        >
          스타일 적용 2{' '}
        </div>
        {/* 4. className tkdyd
            - class 속성 아닌 className 속성 사용
            - ex) <div className="App"> 
        
            5. 종료 태그가 없는 태그 사용
            - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그 작성해야 함 or self-closing 
            - <input /> or <input></input>

            6. 주석
            - //: jsx 외부 주석
            - {* *}: jsx 내부 주석
        */}
        {/* 실습 */}
        <div>
          이것은 div입니다.
          <h3>이것은 div 안에 있는 h3태그입니다.</h3>
          <h2>
            제 반려 동물의 이름은 {name1}입니다. <br></br>
            {name1}는 {animal}입니다. <br />
            {3 + 5 === 8 ? '정답입니다' : '오답입니다'}
            <br />
            {a > b && <span>a가 b보다 큽니다.</span>}
          </h2>
          <div className='test'>Hello World</div>
          <div className='input'>
            아이디<input></input> <br />
            비밀번호<input type='password'></input> <br />
          </div>
          <div className='red'>red</div>
          <div className='orange'>orange</div>
          <div className='yellow'>3</div>
          <div className='green'>4</div>
          <div className='blue'>5</div>
          <div className='navy'>6</div>
          <div className='purple'>7</div>
        </div>
        {/* 애벌레 */}
        <Larva />
      </>
      {/*Fragment*/}
    </div>
  );
}

export default App;
