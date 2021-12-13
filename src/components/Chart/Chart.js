import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {

    const monthlyExpenses = props.dataPoints.map(datapoint => datapoint.totalMonthExpense);
    // const totalMaximum = Math.max(...dataPointValues); //re-configured my chart to be displayed as: total sum of expenses in a month relative to the total expenses in the year
    const totalYearExpense = monthlyExpenses.reduce((acc, el) => acc + el, 0)

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} monthExpense={dataPoint.totalMonthExpense} yearExpense={totalYearExpense} label={dataPoint.label} />)}
        </div>
    )
};

export default Chart;