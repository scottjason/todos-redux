import { ADD_TODO, EDIT_TODO } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    _id: uuidv4(),
    text: 'pick up groceries',
    createtAt: Date.now(),
    isReadOnly: true,
    isComplete: false,
  },
  {
    _id: uuidv4(),
    text: 'fold the laundry',
    createtAt: Date.now(),
    isReadOnly: true,
    isComplete: false,
  },
];

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
      };
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
