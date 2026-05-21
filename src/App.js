import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((item, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo App</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter Your Anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="add-btn" onClick={addTodo}>
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>

              <button
                className="delete-btn"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;