//let us import the required items
import React, { useEffect, useState } from 'react';
import Search from './Search';

function Transactions() {
    //let us set the state
  const [transactions, setTransactions] = useState([]);
//fetch data from api endpoint, 
useEffect(()=> {
    fetch("http://localhost:3000/transactions")
     .then((res) => res.json())
     .then((transactions) => setTransactions(transactions))
     .catch((error) => console.log(error));
}, []);

  const [query, setQuery] = useState("")
  const serach_parameters = Object.keys(Object.assign({}, ...transactions));
  function search(transactions) {
    return transactions.filter((transactions)=> serach_parameters.some.some((parameter) => transactions[parameter].toString().toLowerCase().includes(query)))
  }
  return (
    <div className="transactions">
     <Search/>
      <h2>Transactions</h2>
      <table>
        {/* create headers for each and every thing */}
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            {/* lets display our transactions */}
          {transactions.map(transaction => (
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
  );
}

export default Transactions;
