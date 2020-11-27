import { connect } from 'react-redux';
import Todo from './Todo';
import { editTodo } from '../redux/actions';

const TodosList = props => {
  console.log("TodosList", props);
  return props.todos.map(todo => {
    return <Todo editTodo={props.editTodo} todo={todo} />;
  })
}

const mapStateToProps = state => {
   const { todos } = state;
   return { todos };
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: todo => dispatch(editTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
