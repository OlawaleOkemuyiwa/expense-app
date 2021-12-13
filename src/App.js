import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';
//We combine all the components in App.js to be rendered in the DOM

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpense = newexpense => {
    setExpenses(prevExpenses => [newexpense, ...prevExpenses]);
    // DUMMY_EXPENSES.unshift(newexpense);
    // const expenseArray = DUMMY_EXPENSES;
    // setExpenses(expenseArray);
  }

  return (
    <div className="container"> 
      <NewExpense retrieveExpense={addNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

//App.js is the root component and it is rendered once in the index.js file