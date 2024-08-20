import React, {useState, useEffect, useCallback} from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const fetchTodos = useCallback(async () => {
        const response = await fetch('http://localhost:5000/todos/');
        const data = await response.json();
        setTodos(data);
    },[]);

    useEffect(() => {
        fetchTodos()
    }, [])

    const addTodo = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:5000/todos/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: input })
        });

        fetchTodos();
        setInput('');
    };

    const deleteTodo = async (id) => {
        await fetch(`http://localhost:5000/todos/${id}`, { method: 'DELETE' });
        fetchTodos()
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
            <div>
                {console.log(todos)}
                {todos.map((todo) => (
                    <TodoItem key={ todo.id } item={ todo } onDelete={ deleteTodo } />
                ))}
            </div>
        </div>
    );
}

export default TodoList;