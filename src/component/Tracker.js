import React, { useState } from "react";
import "./Tracker.css";

function ExpensiveTracker() {
  const [balance, setBalance] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const logTransaction = (amount, type) => {
    const time = new Date().toString();
    setTransactions([...transactions, { time, amount, type }]);
  };

  const handleAdd = () => {
    if (inputValue > 0) {
      const newBalance = balance + inputValue;
      setBalance(newBalance);
      logTransaction(inputValue, "Add");
      setInputValue("");
    }
  };

  const handleRemove = () => {
    if (inputValue > 0) {
      const newBalance = balance - inputValue;
      setBalance(newBalance);
      logTransaction(inputValue, "Remove");
      setInputValue("");
    }
  };

  return (
    <div className="main_content">
      <div className="basic_tracker">
        <h1>Expense Tracker</h1>
        <h3>Balance : {balance}</h3>
        <div>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(+e.target.value)}
          />
        </div>
        <div className="button_design">
          <button className="add" onClick={handleAdd}>
            Add
          </button>{" "}
          <button className="remove" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>

      <div className="transaction_details">
        <h1>Transaction Details</h1>
        <ul>
          {transactions.map(({ time, amount, type }) => (
            <li key={time}>
              {time} - {amount} - {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExpensiveTracker;
