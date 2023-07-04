
const ToDoItem = (props) => {
    let {todo, onDeleteTodo, onToggleTodo} = props;

    return (
        <p style={{ textDecoration: todo.completed ? "line-through" : "none"}}
        >
            <input 
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleTodo(todo.id)}
            />
            {todo.text}
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </p>
    );
};

export default ToDoItem;
