import { ADD_TODO, EDIT_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    {
      _id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      text: 'pick up groceries',
      createtAt: Date.now(),
      isReadOnly: true,
      isComplete: false,
    },
    {
      _id: '8b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      text: 'fold the laundry',
      createtAt: Date.now(),
      isReadOnly: true,
      isComplete: false,
    },
  ],
};

export const generateTodo = text => {
  return {
    _id: uuidv4(),
    text: text,
    createtAt: Date.now(),
    isReadOnly: true,
    isComplete: false,
  };
};

export const todosReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: state.todos.concat(generateTodo(action.payload.text)),
      };
    }
    case EDIT_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.todo._id === todo._id) {
            return { ...todo, isReadOnly: false };
          }
          return todo;
        }),
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload._id === todo._id) {
            return { ...todo, isReadOnly: true, text: action.payload.text };
          }
          return todo;
        }),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return action.payload._id !== todo.id;
        }),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
