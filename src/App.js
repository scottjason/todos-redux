import React from 'react';
import './App.scss';
import TodosList from './components/TodosList';
import { Provider } from 'react-redux';
import store from './redux/store';

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
