import React from 'react';
import InputField from '../shared/InputField';
import './Todo.scss';

export const onInputChange = (inputName, inputValue) => {
  console.log('onInputChange Todo', inputName, inputValue);
};

const Todo = props => {
  const { todo } = props;
  const label = {
    text: 'todo',
    htmlFor: todo._id,
  };
  return (
    <InputField
      label={label}
      className='add-todo'
      inputType='text'
      inputName='addTodo'
      value={todo.text}
      isReadOnly={todo.isReadOnly}
      onInputChange={onInputChange}
    />
  );
};

export default Todo;
