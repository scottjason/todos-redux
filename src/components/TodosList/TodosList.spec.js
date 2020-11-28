import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodosList from './TodosList';

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
          <TodosList />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
