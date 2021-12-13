import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = props => {  //CCC: some components are not for adding new JSX elements, instead they're only used to implement a logic and pass a data from that logic to the component they return. This is done to keep the component they return as lean as possible

    const chartDataPoints = [
        { label: 'Jan', totalMonthExpense: 0 },
        { label: 'Feb', totalMonthExpense: 0 },
        { label: 'Mar', totalMonthExpense: 0 },
        { label: 'Apr', totalMonthExpense: 0 },
        { label: 'May', totalMonthExpense: 0 },
        { label: 'Jun', totalMonthExpense: 0 },
        { label: 'Jul', totalMonthExpense: 0 },
        { label: 'Aug', totalMonthExpense: 0 },
        { label: 'Sep', totalMonthExpense: 0 },
        { label: 'Oct', totalMonthExpense: 0 },
        { label: 'Nov', totalMonthExpense: 0 },
        { label: 'Dec', totalMonthExpense: 0 }
    ];

    for (const expense of props.expenses) { //looping over the filtered expenses(expenses streamlined to a selected year) to add up the total expense for each of the months
        const expenseMonth = expense.date.getMonth(); //janauary == 0, febuary == 1...
        chartDataPoints[expenseMonth].totalMonthExpense += expense.amount;
    }
    
    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart;