import { ADD_TODO, EDIT_TODO } from './actionTypes';

export const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const editTodo = todo => ({
  type: EDIT_TODO,
  payload: {
    todo,
  },
});
