import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { createGlobalStyle } from 'styled-components';
import TodoItem from './TodoItem';

function TodoForm() {
    const link = 'http://localhost:9000/todo';
    const [todos, setTodos] = useState([]);

useEffect(() => {
    getTodos();
    
    console.log(todos);
}, [])

    async function getTodos(){
        const data = await axios.get(link);
        //console.log(data);
        setTodos(data.data);
    }

    const renderTodos = () => {
        return todos.map((todo,i) => {
            return <TodoItem key={i} todo={todo} />
        })
    }
    return(
        <div>
           {renderTodos()}
        </div>
    )
}


export default TodoForm;