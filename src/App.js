import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); // State to manage todos
  const inputRef = useRef(null); // Ref for input field

  const addTodo = () => {
    const inputValue = inputRef.current.value; // Get value from input field
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]); // Add new todo to the list
      inputRef.current.value = ''; // Clear input field
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo at the specified index
    setTodos(updatedTodos); // Update todos list
  };

  return (
      <div className="App">
        <div className="todo-container">
          <h1>Todo List</h1>
          <div className="custom-input">
            <input type="text" className="custom-input-field" ref={inputRef} />
            <button className="custom-btn" onClick={addTodo}>
              Add
            </button>
          </div>
          <ul className="todo-list">
            {todos.map((todo, index) => (
                <li key={index} className="todo-item">
                  <span>{todo}</span>
                  <button className="remove-btn" onClick={() => removeTodo(index)}>
                    Remove
                  </button>
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

export default App;
