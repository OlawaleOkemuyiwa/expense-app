import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = props => {
    /*  const [title, setTitleFunc] = useState(props.title);    //useState is a react hook used to update the state of an instance of a component. It is initialized with the initial value of the state as its argument and returns an array of the state to be later updated as the first element and the second element is a function to update the state whenever required.
        const clickHandler = () => {         //CCC:when a click is fired on the button element, clickHandler function is executed. In there, setTitleFunc is called and it triggers this component to be re-executed FOR ONLY the instance of this component(4 instances of ExpenseItem were created in the expenses component) whose the state(each instances have its own state(s)) was updated by the setTitleFunc (i.e where the event was triggered). *useState is only initialized with the initial value of state on first execution of the component, when the component is re-executed React would not re-initialize the state but the state would now be what its been updated to by its update function that caused the re-execution of the component. 
        setTitleFunc('updated');            //CCC: there is no re-execution of the component unless clickHandler function is done with all the jobs it has inside of it. So when the state update func gets called, a component re-execution is scheduled and the clickHandler function continues to executes the code further downwards in it till its done. when it is done, the scheduled re-execution is then done and now the state value is what it has been set to be. THE NEW STATE IS ALWAYS ONLY AVAILABLE AFTER RE-EXECUTION OF THE COMPONENT
    }   */

    return (    //when the Card component is rendered here, someClass is a prop accssible in the Card component by props.someClass while the innerHTML is props.children
        <li>
            <Card someClass="expense-item">
                <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;
