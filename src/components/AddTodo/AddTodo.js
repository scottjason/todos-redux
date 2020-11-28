import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import InputField from '../shared/InputField';

const AddTodo = props => {
  const [text, setText] = useState('');
  
  const label = {
    text: 'add to do',
    htmlFor: 'add-to-do',
  };

  const onInputChange = inputValue => setText(inputValue);

  const onSubmit = e => {
    e && e.preventDefault();
    props.addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <InputField
        label={label}
        className='add-todo'
        inputType='text'
        inputName='addTodo'
        value={text}
        isReadOnly={false}
        onInputChange={onInputChange}
      />
    </form>
  );
};

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
