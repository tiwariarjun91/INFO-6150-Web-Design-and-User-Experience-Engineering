import React from 'react';




function TodoItem({todo}) {
    return(
        <div>
            <h1>{todo.title}</h1>
        </div>
    )
}

export default TodoItem;