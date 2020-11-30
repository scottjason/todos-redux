import { ADD_TODO, EDIT_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

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

export const updateTodo = (_id, text) => ({
  type: UPDATE_TODO,
  payload: {
    _id,
    text,
  },
});

export const deleteTodo = _id => ({
  type: DELETE_TODO,
  payload: {
    _id,
  },
});
