// components/Transactions.js
import React, { useEffect, useState } from 'react';
import Search from './Search';
import TransactionForm from './TransactionForm';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  // Fetch data from the API endpoint
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.log(error));
  }, []);

  const searchParameters = Object.keys(Object.assign({}, ...transactions));
  function search(transactions) {
    return transactions.filter((transaction) =>
      searchParameters.some((parameter) =>
        transaction[parameter].toString().toLowerCase().includes(query)
      )
    );
  }

  // Handle the addition of a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="transactions">
      <Search />
      <div className="pulse">
        <h2>Transactions</h2>

        {/* Include the TransactionForm component */}
        <TransactionForm onAddTransaction={handleAddTransaction} />

        <table>
          {/* Headers for the table */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Display the transactions */}
            {search(transactions).map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transactions;
