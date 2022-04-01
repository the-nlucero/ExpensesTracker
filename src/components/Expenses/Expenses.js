import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

function Expenses(props) {
  //Sets Default Year
  const [filteredYear, setFilteredYear] = useState("2018");

  //Logs the selected year
  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }

  // Makes Filtered List Work
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* Sets Default Year, Receives data from ExpensesFilter.js, & computes Handler Function */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {/* Compiles Expenses Content */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
