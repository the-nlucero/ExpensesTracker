import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  //If Expenses is Empty Prompt Message
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses!</h2>;
  }

  // Stores Hard-Coded Filtered List as an Array IF not Empty
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
