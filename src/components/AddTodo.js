import React, { useState } from 'react';
import InputField from './shared/InputField';

const AddTodo = props => {
  const [content, setContent] = useState('');
  
  const label = {
    text: 'add to do',
    htmlFor: 'content',
  };

  const onSubmit = e => {
    e && e.preventDefault();
    console.log("content", content);
  };

  const onInputChange = (inputName, inputValue) => {
    setContent(inputValue);
  };
  return (
    <form onSubmit={onSubmit}>
      <InputField
        label={label}
        className='add-todo'
        inputType='text'
        inputName='addTodo'
        onInputChange={onInputChange}
      />
    </form>
  );
};

export default AddTodo;
