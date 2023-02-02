import PropTypes from 'prop-types';
import React, { useState } from 'react';

const InputTodo = (props) => {
  const { edit, onSubmit } = props;
  const [input, setInput] = useState(edit ? edit.value : '');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput('');
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Edit todo"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button type="submit" className="edit__button">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            onChange={handleChange}
          />
          <button type="submit" className="add__button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
};

InputTodo.propTypes = {
  edit: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InputTodo;
