import React from 'react';
import { ToDoItem } from '../types/types';

// {todo} => {todo: XXX}
interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    //onChange: 인자 들어가기 때문에 () = 필요 // 바로 실행되는 것을 막음
    <>
      <li>
        <label>
          <input
            type='checkbox'
            defaultChecked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
          />
          {todo.text}
        </label>
      </li>
    </>
  );
}
