import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = props => {
    console.log('expense form is executed');

    const [enteredTitle, setEnteredTitle] = useState('');  //CCC:more than one state can exist in a component as specified below (they are called state slices) but its also possible to have just one state which performs the same logic as the 3 states combined
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    }) */

    const titleChangeHandler = (event) => {         //whatever is put into the state update func is the value of the new state. There is no merging of the old and the new state whatsoever
        setEnteredTitle(event.target.value);
    
        /* setUserInput({           //the userInput object state is spread out and then its enteredTitle property is updated and this new object is then set to be the new state
            ...userInput,
            enteredTitle: event.target.value
        })                      //CCC:whenever the immediate state is depended on to update the state(userInput was used in this case), it is bad practice to use the previous state directly to set the new state. Instead it is done by passing a function as shown below:
        
        setUserInput((latestState) => { //latestState === latest value of state (userInput) before re-execution of the component due to state update. This approach guarantees that the state snapshot given here would always be the latest state keeping all scheduled state updates in mind
            return {
                ...latestState,
                enteredTitle: event.target.value
            }
        }) */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        /* setUserInput((latestState) => {
            return {
                ...latestState,
                enteredAmount: event.target.value
            }
        }) */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        /* setUserInput((latestState) => { 
            return {
                ...latestState,
                enteredTitle: event.target.value
            }
        })  */
    };


    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredTitle !== '' && enteredTitle !== ' ' && isNaN(enteredTitle)) {

            const expenseData = {
                title: enteredTitle,
                amount: parseFloat(enteredAmount),
                date: new Date(enteredDate) //enteredDate === '2021-11-03', new Date('2021-11-03')
            };

            //CCC: the now generated expenseData obj is available here but the data is actually needed in the App.js where it is added to the array of expenses and then used to render a new expense item by the Expenses component. Therefore, the data must be passed from here to the NewExpense parent component then from the NewExpense component to the App component. This differs from how data is passed from a parent component to the attributes of a child component and these data are then accessible in the child component through props object. Instead data is passed from child to parent
            //This is achieved by creating a function in the parent component (e.g retrieveNeededData) and passing this function to the attribute of the child component (e.g retrieveData={retrieveNeededData}) so it can be accessed in that child component with the needed data as props.retrieveData. Now props.retrieveData can be called in the child component and the needed data is then passed as an argument to the function which is the parameter of the function in the parent component. i.e. ARGUMENT OF THE FUNCTION IN CHILD COMPONENT === PARAMETER OF THE FUNCTION IN PARENT COMPONENT.
            props.retrieveData(expenseData);
    
            setEnteredTitle('');  //CCC:2 way binding enables us to gather user inputs as they're typed  in and also set to their values(upon submission the values of the inputs is set back to '')
            setEnteredAmount('');
            setEnteredDate('');
        } 
    }
 
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;