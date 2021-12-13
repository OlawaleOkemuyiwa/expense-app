import React from "react";

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    let expensesContent;

    if (props.expenses.length > 0) {
        expensesContent = props.expenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
    } else {
        expensesContent = <h2 className="expenses-list__fallback">no expense found</h2>
    }

    return (
        <ul className="expenses-list">
            {expensesContent}
        </ul>
    )
}

export default ExpensesList;