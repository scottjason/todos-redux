import './Todo.scss';
import InputField from './shared/InputField';

export const onInputChange = (inputName, inputValue) => {
  console.log('onInputChange Todo', inputName, inputValue);
};

const Todo = props => {
  const { todo } = props;
  const label = {
    text: 'add to do',
    htmlFor: 'content',
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
