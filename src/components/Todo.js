const Todo = props => {
  const { todo, editTodo } = props;
  console.log("Todo", props)
  return (
  <li
    className={todo.isComplete ? 'completed' : ''}
    onClick={() => editTodo(todo)}
  >
    {todo.text}
  </li>
  );
};

export default Todo;
