//let us import the required items
import React, { useEffect, useState } from 'react';


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


  return (
    <div className="transactions">
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
