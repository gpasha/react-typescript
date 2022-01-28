import React, { FC } from 'react';
import { ITodo } from '../types/types';

export interface TodoItemProps {
  todo: ITodo
  onClick: (todo: ITodo) => void
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div style={{cursor: 'pointer'}} onClick={() => onClick(todo)}>
      <input type={'checkbox'} checked={todo.completed} />
      {todo.id}. {todo.title}
    </div>
  )
}

export default TodoItem