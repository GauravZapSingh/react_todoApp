import React from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
        <Todo />
      </header>
    </div>
  );
}

export default App;
