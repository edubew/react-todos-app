import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdDeleteSweep } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import InputTodo from './InputTodo';

const TodoItem = ({
  todos, completeTodo, removeTodo, updateTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <InputTodo edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <li
      className={todo.isComplete ? 'todo__completed' : 'todo__row'}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
    >
      <input
        type="checkbox"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      />
      {todo.text}
      <div className="todo__icons">
        <MdDeleteSweep
          onClick={() => removeTodo(todo.id)}
          className="delete__icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit__icon"
        />
      </div>
    </li>
  ));
};

TodoItem.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};

export default TodoItem;
