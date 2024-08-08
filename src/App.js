// src/App.js
import React from 'react';
import Transactions from './components/Transactions';
import TransactionForm from './components/TransactionForm';
// import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className='head'>
        <h1>Bank of Flatiron</h1>
      </header>
     
      <Transactions />
      {/* <Search /> */}
    </div>
  );
}

;

export default App;
