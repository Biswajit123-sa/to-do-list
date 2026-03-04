import { useState } from "react";

function TodoInput({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        className="flex-1 p-2 rounded-lg border-none outline-none"
      />

      <button
        onClick={handleSubmit}
        className="bg-white text-indigo-600 px-4 rounded-lg font-semibold hover:scale-105 transition"
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;