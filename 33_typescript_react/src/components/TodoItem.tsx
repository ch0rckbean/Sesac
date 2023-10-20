import React from 'react';
import { ToDoItem } from '../types/types';

// {todo} => {todo: XXX}
interface Props {
  todo: ToDoItem;
  toggleComplete: (id: number) => void;
}

export default function TodoItem({ todo, toggleComplete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleComplete(todo.id)} //인자 들어가기 때문에 () => 필요
        />
        {todo.text}
      </label>
    </li>
  );
}
