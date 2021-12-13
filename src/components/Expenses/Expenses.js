import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = props => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const retrieveFilteredYear = selectedYear => { //whenever the change event is triggered in the expressFilter component, the selected year is retrieved and used here in its parent to update to update state which then leads to the re-execution of the Expenses component and now we have a new filtered Expenses array with the elements whose year matches the selected Year
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => { //filteredExpenses is a filtered array containing obj with properties: id, title, amount, and date collected from Expenseform UI
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card someClass="expenses">
            <ExpensesFilter selected={filteredYear} retrieveYear={retrieveFilteredYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses}/>
        </Card>  
    )
}

export default Expenses;