import "./App.css";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//Hard Coded Values
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 1, 10),
  },
  {
    id: "e2",
    title: "Toaster",
    amount: 13.93,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Television",
    amount: 583.12,
    date: new Date(2019, 0, 15),
  },
  {
    id: "e4",
    title: "Desktop",
    amount: 1397.78,
    date: new Date(2018, 0, 29),
  },
];

function App(props) {
  //Initialize Previous Values & New Values
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //Displays Old Data appended to New Data
  function addExpenseHandler(Newexpense) {
    setExpenses((prevExpenses) => {
      return [Newexpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
