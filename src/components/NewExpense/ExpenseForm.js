import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Captures Every Charachter for Entered Title
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  //Captures Every Charachter for Entered Amount
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  //Captures Every Charachter for Entered Date
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
  
    //Does not reload the page
    event.preventDefault();


    //Submit Entered Data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

   // Save new data to NewExpense.js
   props.onSaveExpenseData(expenseData);

    //Clears after Submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        {/* Allows React to Store User input into specified compartments */}
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
