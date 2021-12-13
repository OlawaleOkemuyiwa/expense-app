import React from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = props => {
    
    const retrieveNeededData = neededData => { //a function used to retrieve data from ExpenseForm child component
        const expenseData = {
            ...neededData,
            id: Math.random().toString()
        }

        props.retrieveExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm retrieveData={retrieveNeededData}/>
        </div>
    )
}

export default NewExpense;