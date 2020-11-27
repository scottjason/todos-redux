import { connect } from 'react-redux';
import Todo from './Todo';
import AddTodo from './AddTodo';
import { editTodo } from '../redux/actions';
import './TodoList.scss';

const TodosList = props => {
  console.log(props)
  return (
    <main>
    <AddTodo />
      {props.todos.map(todo => {
        return <Todo key={todo._id} editTodo={props.editTodo} todo={todo} />;
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
    editTodo: todo => dispatch(editTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
