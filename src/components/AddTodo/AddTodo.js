import React, { useState, useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';
import InputField from '../shared/InputField';
import './AddTodo.scss';

const AddTodo = props => {
  const [text, setText] = useState('');
  const defaultInputValue = 'add a todo...';
  const ref = createRef();

  const label = {
    text: 'add to do',
    htmlFor: 'add-to-do',
  };
  
  const onChange = inputValue => setText(inputValue);
  
  const onFocus = () => {
    if (!text || text === defaultInputValue) {
      setText('');
    }
  };
  
  const onBlur = () => {
    if (!text) setText(defaultInputValue);
  };

  const onSubmit = e => {
    e && e.preventDefault();
    props.addTodo(text);
    setText(defaultInputValue);
    ref.current.blur();
  };

  useEffect(() => {
    setText(defaultInputValue);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <InputField
        ref={ref}
        value={text}
        label={label}
        onBlur={onBlur}
        onFocus={onFocus}
        inputType='text'
        className='add-todo'
        inputName='addTodo'
        isReadOnly={false}
        onChange={onChange}
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
