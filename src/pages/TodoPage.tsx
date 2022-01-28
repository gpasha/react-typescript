import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../types/types';

type TodoPageParas = {
  id: string
}

function TodoPage() {
  const [todo, setTodo] = useState<ITodo>()
  const { id } = useParams<TodoPageParas>()

  useEffect(() => {
    fetchTodo()
  }, []);

  async function fetchTodo() {
    try {      
      const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/` + id)
      setTodo(response.data)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <h1>{todo?.title}</h1>
      <h2>{todo?.id}</h2>
    </>
  );
}

export default TodoPage;
