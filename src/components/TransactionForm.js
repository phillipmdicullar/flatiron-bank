// components/TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
    const [newTransaction, setNewTransaction] = useState({
        date: "",
        description: "",
        category: "",
        amount: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        setNewTransaction({
            ...newTransaction,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransactionWithId = {
            ...newTransaction,
            id: Date.now(), // Use a unique ID generator like Date.now()
        };

        // Pass the new transaction up to the parent component
        onAddTransaction(newTransactionWithId);

        // Optionally send the new transaction to the backend
        fetch("https://flatiron-backend-virid.vercel.app/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTransactionWithId)
        })
            .then((res) => res.json())
            .then((data) => console.log("New transaction added:", data))
            .catch((error) => console.log(error));

        // Clear the form
        setNewTransaction({
            date: "",
            description: "",
            category: "",
            amount: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                value={newTransaction.description}
                placeholder="Description"
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="category"
                value={newTransaction.category}
                placeholder="Category"
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="amount"
                value={newTransaction.amount}
                placeholder="Amount"
                onChange={handleChange}
                required
            />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
