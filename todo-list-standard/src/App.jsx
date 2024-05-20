import React from "react";
import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <main>
        <TodoForm setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
