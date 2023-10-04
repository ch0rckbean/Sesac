import { useState, useRef } from 'react';

export default function Event_ex2() {
  // useref 객체 생성
  const myRefWriter = useRef();
  const myRefTitle = useRef();

  //초기 리스트
  const [list, setList] = useState([]);

  // 입력 값
  const [inputTitle, setInputTitle] = useState('');
  const [inputWriter, setInputWriter] = useState('');
  const [inputSearch, setInputSearch] = useState('');

  // 입력값에 따른 변경
  const titleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const writerChange = (e) => {
    setInputWriter(e.target.value);
  };
  const searchChange = (e) => {
    setInputSearch(e.target.value);
  };

  // 함수
  const handleRefWriter = () => {
    myRefWriter.current.focus();
  };
  const handleRefTitle = () => {
    myRefTitle.current.focus();
  };
  const addList = () => {
    if (inputWriter.trim().length < 1) {
      handleRefWriter();
      return;
    }
    if (inputTitle.trim().length < 1) {
      handleRefTitle();
      return;
    }
    const newList = {
      id: list.length + 1,
      title: inputTitle,
      writer: inputWriter,
    };
    setList([...list, newList]); //꼭 배열 형태로 만들기!!!!
    setInputTitle('');
    setInputWriter('');
    // console.log('list', list);
  };

  return (
    <>
      작성자:{' '}
      <input
        type='text'
        placeholder='작성자'
        onChange={writerChange}
        value={inputWriter}
        ref={myRefWriter}
      />
      제목:{' '}
      <input
        type='text'
        onChange={titleChange}
        value={inputTitle}
        ref={myRefTitle}
      />
      <button onClick={addList}>작성</button>
      <br></br>
      <br></br>
      <select>
        <option value='작성자'>작성자</option>
        <option value='제목'>제목</option>
      </select>
      <input type='text' placeholder='검색어' value={inputSearch}></input>
      <button>검색</button>
      <br></br>
      <br></br>
      <table style={{ width: '400px' }}>
        <thead>
          <tr>
            <th
              style={{ border: '1px solid black', borderCollapse: 'collapse' }}
            >
              번호
            </th>
            <th
              style={{ border: '1px solid black', borderCollapse: 'collapse' }}
            >
              제목
            </th>
            <th
              style={{ border: '1px solid black', borderCollapse: 'collapse' }}
            >
              작성자
            </th>
          </tr>
        </thead>
        <tbody>
          {list.map((val) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.title}</td>
                <td>{val.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
