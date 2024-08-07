// src/App.js
import React from 'react';
import Transactions from './components/Transactions';


function App() {
  return (
    <div className="App">
      <header className='head'>
        <h1>Bank of Flatiron</h1>
      </header>
      
      <Transactions />
    </div>
  );
}

export default App;
