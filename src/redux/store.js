import { createStore, combineReducers } from 'redux';
import { todosReducer } from './reducer';

const reducers = combineReducers(todosReducer)

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
