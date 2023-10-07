import React, { useState } from 'react';

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
    if (isChecked) {
      setCheckedList([...checkedList, checkedId]);
    } else {
      setCheckedList(checkedList.filter((todoId) => todoId !== checkedId));
    }
    console.log('cl', checkedList);
  };
  const deleteTodo = () => {
    //삭제될 일이 체크됐으면
    const newTodo2 = todo.filter((todo) => todo.id !== todo.isChecked);
    console.log('checkedList', checkedList);
    setTodo([...todo, newTodo2]);
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
                  onChange={(e) =>
                    handleCheck(e.target.checked, e.target.value)
                  }
                  value={todo.val}
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
