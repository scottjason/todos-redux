import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addTodo } from '../../redux/actions';
import { ADD_TODO } from '../../redux/actionTypes';
import AddTodo from './AddTodo';

const middleware = [];
const initialState = {};
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('AddTodo', () => {
  
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddTodo />
        </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('dispatches the action for adding a todo', () => {
    const text = 'walk the dog';
    store.dispatch(addTodo(text));

    const actions = store.getActions();
    const expectedPayload = {
      type: ADD_TODO,
      payload: {
        text: text,
      },
    };
    expect(actions).toEqual([expectedPayload]);
  });
});
