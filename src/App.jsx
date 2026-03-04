import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/Todolist";
import Navbar from "./components/navbar";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: uuidv4(),
      text,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTask = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const editTask = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex justify-center items-center p-4">
      <div className="backdrop-blur-lg bg-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Modern Todo App
        </h1>

        <TodoInput addTask={addTask} />
        <Todolist
          todos={todos}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      </div>
    </div>
  </>
  );
}

export default App;