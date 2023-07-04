import {useState} from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addTodo = () => {
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue,
                completed: false, 
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const toggleTodo = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>To-Do-List</h1>
            <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            placeholder="Enter a task"
             />
             <button onClick={addTodo}>Add</button>
             <ul>
                {todos.map((todo) => (
                    <ToDoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={deleteTodo}
                    onToggleTodo={toggleTodo}
                     />
                ))}
             </ul>
        </div>
    );
};

export default ToDoList;