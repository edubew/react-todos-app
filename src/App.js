import React from 'react';
import TodosList from './components/TodoList';
import Header from './components/Header';

const App = () => (
  <div className="todos__container">
    <Header />
    <TodosList />
  </div>
);

export default App;
