import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodosList from './TodosList';
import AddTodo from '../AddTodo/AddTodo';

const middleware = [];
const initialState = {
  todos: [],
};
const mockStore = configureStore(middleware);
const store = mockStore(initialState);

describe('TodosList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AddTodo />
          <TodosList />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
