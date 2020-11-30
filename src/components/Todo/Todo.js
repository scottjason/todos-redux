import React, { useState, createRef } from 'react';
import InputField from '../shared/InputField';
import './Todo.scss';

const Todo = props => {
  const ref = createRef();
  const { todo } = props;
  const [text, setText] = useState(todo.text);
  const markCompleteCopy = todo.isReadOnly ? 'mark complete' : 'update';

  const label = {
    text: 'todo',
    htmlFor: todo._id,
  };

  const onFocus = () => {
    console.log('on focus', ref.current);
  }

  const onKeyPress = e => {
    if (e && e.key === 'Enter') {
      e.preventDefault();
      const { _id } = todo;
      props.updateTodo(_id, text);
    }
  };

  return (
    <section>
      <div className='opts'>
        <p onClick={() => todo.isReadOnly && props.editTodo(todo)} className='edit-todo'>
          edit
        </p>
        <p
          className='mark-complete'
          onClick={() => !todo.isReadOnly && props.updateTodo(todo._id, text)}
        >
          {markCompleteCopy}
        </p>
        {todo.isReadOnly && (
          <p
            className='delete-todo'
            onClick={() => todo.isReadOnly && props.deleteTodo(todo._id, text)}
          >
            delete
          </p>
        )}
      </div>
      <InputField
        ref={ref}
        onFocus={onFocus}
        label={label}
        className='add-todo'
        inputType='text'
        inputName='addTodo'
        value={text}
        isReadOnly={todo.isReadOnly}
        onKeyPress={onKeyPress}
        onChange={inputValue => setText(inputValue)}
      />
    </section>
  );
};

export default Todo;
