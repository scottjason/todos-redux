import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodosList from './components/TodosList/TodosList';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <div className='app-container'>
        <TodosList />
      </div>
    </Provider>
  );
}

export default App;
