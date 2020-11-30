import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from './reducer';

export default createStore(todosReducer, applyMiddleware(thunk));

