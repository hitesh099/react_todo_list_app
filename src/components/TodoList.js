import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isEditing: false }];
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  const editTodo = (index, newText) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, text: newText, isEditing: false };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const toggleEdit = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (index === todoIndex) {
        return { ...todo, isEditing: !todo.isEditing };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
