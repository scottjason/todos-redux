import { ADD_TODO, EDIT_TODO } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
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
];

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
  switch (action.type) {
    case ADD_TODO: {
      return [...state, generateTodo(action.payload.text)];
    }
    case EDIT_TODO: {
      return state.map(todo => {
        if (action.payload.todo._id === todo._id) {
          return { ...todo, text: todo.text };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
};
