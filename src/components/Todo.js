import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo } from '../actions';

const Todo = ({ onClick, completed, text, id, dispatch }) => {
  const handleRemove = () => {
    if (id) {
      dispatch(removeTodo(id));
    }
  };

  return (
    <div>
      <div>
        <li
          onClick={onClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {text}
        </li>
        <span onClick={handleRemove}></span>
      </div>
      <hr />
    </div>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default connect()(Todo);
