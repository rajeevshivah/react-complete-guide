import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [hidden, setHidden] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const switchValue = (value) => {
    setHidden(value);
  };
  return (
    <div className="new-expense">
      {!hidden ? (
        <button onClick={() => switchValue(true)}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setValue={switchValue}
        />
      )}
    </div>
  );
};

export default NewExpense;
