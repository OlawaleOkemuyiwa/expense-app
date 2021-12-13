import React from "react";

import './ChartBar.css';

const ChartBar = props => {

    let barFillHeight = '0%';

    if(props.yearExpense > 0) {
        barFillHeight = `${Math.round((props.monthExpense/props.yearExpense) * 100)}%`;
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}></div>
            </div>
            <div className="chartbar__label">{props.label}</div>
        </div>
    )
}

export default ChartBar;