import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

//Initialize Cancel Button
  const [isEditing, setIsEditing] = useState(false);

//Triggered When Cancel Button is Clicked
  function startEditingHandler() {
    setIsEditing(true);
  }

//Cancel Button Has Not been Clicked 
  function stopEditingHandler() {
    setIsEditing(false);
   }

//Handles New Data to Be Saved & Stores Logged Old Data
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData, // new array with info from ExpenseForm.js
      id: Math.random().toString(), // new generated id for added item
    };
    //Passes New Data from ExpenseForm.js to App.js
    props.onAddExpense(expenseData);

    //Set the initial State to False since Cancel Button has not been clicked
    stopEditingHandler();
  }



  return (
    <div className="new-expense">
      {/* Show ONLY button Unless Clicked */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/* Shows Form to Add Content once Button isClicked & Handles Cancel Button */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
