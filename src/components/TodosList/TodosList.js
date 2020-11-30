import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';
import { editTodo, updateTodo } from '../../redux/actions';
import './TodoList.scss';

const TodosList = props => {
  return (
    <main>
      <AddTodo />
      {props.todos.map(todo => {
        return (
          <Todo
            todo={todo}
            key={todo._id}
            updateTodo={props.updateTodo}
            editTodo={props.editTodo}
          />
        );
      })}
    </main>
  );
};

const mapStateToProps = state => {
  const { todos } = state;
  return { todos };
};

const mapDispatchToProps = dispatch => {
  return {
    editTodo: payload => dispatch(editTodo(payload)),
    updateTodo: payload => dispatch(updateTodo(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
