import React, { useState } from 'react';

const TodoItem = ({ index, todo, deleteTodo, editTodo, toggleEdit }) => {
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(index, newText);
  };

  return (
    <div>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => toggleEdit(index)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default TodoItem;
