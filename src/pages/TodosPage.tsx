import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../components/List';
import TodoItem from '../components/TodoItem';
import { ITodo } from '../types/types';
import TodoPage from './TodoPage';

function TodosPage() {;
  const [todos, setTodos] = useState<ITodo[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchTodos()
  }, []);

  async function fetchTodos() {
    try {      
      const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      setTodos(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem onClick={(todo) => navigate('/todos/' + todo.id)} key={todo.id} todo={todo} />}
    />
  );
}

export default TodosPage;
