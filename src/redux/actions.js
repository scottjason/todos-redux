import { ADD_TODO, EDIT_TODO } from './actionTypes';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export const editTodo = todo => ({
  type: EDIT_TODO,
  payload: {
    todo,
  },
});