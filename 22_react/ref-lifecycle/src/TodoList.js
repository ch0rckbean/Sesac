import React, { useState } from 'react';

export default function TodoList() {
  const [todo, setTodo] = useState([]); //꼭 배열로 만들어야 map 사용 가능
  const [input, setInput] = useState(''); //변수로 input을 가져오기

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

  const deleteTodo = () => {};

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
                  id='todoCheckbox'
                  onChange={(e) => e.target.checked}
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
