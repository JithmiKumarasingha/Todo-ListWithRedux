import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import { removeTodo } from '../features/todoSlice';

function Todos() {
    const dispatch =useDispatch();
    const todos = useSelector(state => state.todos)
    console.log(todos); 
  return (
    <>
    <h1>Todos</h1>
    {
        todos.map((todo) => 
        <div>
            <p key={todo.id}>{todo.text}</p>
            <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
            </div>
        )
    }
    </>
  )
}

export default Todos
