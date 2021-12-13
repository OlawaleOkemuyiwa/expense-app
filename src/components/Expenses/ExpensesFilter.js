import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = props => {  //ExpensesFilter is a contolled component as both the value and changes to the value of the select input in it are not handled in the component itself but in its parent component

  const dropdownChangeHandler = event => {
    props.retrieveYear(event.target.value);  //the selected filtered year value is generated here but is needed in the Expenses parent component, so the value is lifted there
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
