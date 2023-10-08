import React, { useState, useEffect } from 'react';

export default function TodoList() {
  const [todo, setTodo] = useState([]); //꼭 배열로 만들어야 map 사용 가능
  const [input, setInput] = useState(''); //변수로 input을 가져오기
  const [checkedList, setCheckedList] = useState([]);

  const register = () => {
    if (todo.length >= 10) {
      alert('할 일이 너무 많아요 ㅜㅜ');
    } else {
      const newTodo = {
        id: todo.length + 1,
        val: input,
      };
      setTodo([...todo, newTodo]);
    }
  };

  const handleCheck = (isChecked, checkedId) => {
    checkedId = Number(checkedId); //왜 str으로 받아오지? 숫자로 변환해야 동작
    if (isChecked) {
      console.log('체크 됨');
      setCheckedList([...checkedList, checkedId]);
    } else {
      console.log('체크 해제');
      setCheckedList(
        checkedList.filter((chekckListId) => chekckListId !== checkedId)
        // chekckList 안에 있는 Id 값과 같은 checkedId는 다 뺌
      );
    }
  };

  useEffect(() => {
    //배열을 동기적으로 만듦
    console.log('cl', checkedList);
  }, [checkedList]);

  const deleteTodo = () => {
    //삭제될 일이 체크됐으면
    if (checkedList) {
      const newTodo2 = todo.filter((todo) => !checkedList.includes(todo.id));
      console.log('newTodo2', newTodo2);
      setTodo(newTodo2);
      setCheckedList([]); // 체크 배열 초기화 필요
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='할 일'
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='button' onClick={register}>
        등록
      </button>
      <br></br>
      <div>
        <ul>
          {todo.map((todo) => {
            return (
              <li key={todo.id}>
                <input
                  type='checkbox'
                  onChange={(e) => handleCheck(e.target.checked, e.target.id)}
                  value={todo.val}
                  id={todo.id}
                  // checked={checkedList.includes(todo.value) ? true : false}
                />
                {todo.val}
              </li>
            );
          })}
        </ul>
        <button type='button' onClick={deleteTodo}>
          완료된 일 삭제!
        </button>
      </div>
    </div>
  );
}
