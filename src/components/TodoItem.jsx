import { useState } from "react";

function TodoItem({ todo, deleteTask, toggleComplete, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTask(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li className="bg-white/30 p-3 rounded-xl flex justify-between items-center">
      {isEditing ? (
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 p-1 rounded"
        />
      ) : (
        <span
          onClick={() => toggleComplete(todo.id)}
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-300" : "text-white"
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-400 font-semibold"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-yellow-300 font-semibold"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(todo.id)}
          className="text-red-400 font-semibold"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;