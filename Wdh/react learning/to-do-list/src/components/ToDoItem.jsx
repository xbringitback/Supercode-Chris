import React from 'react';

const ToDoItem = (props) => {
    let {todo, onDeleteTodo, onToggleTodo} = props;

    return (
        <li style={{ textDecoration: todo.completed ? "line-through" : "none"}}
        >
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
    );
};

export default ToDoItem;

// !! mission failed