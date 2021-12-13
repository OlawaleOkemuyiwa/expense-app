import React from 'react';

import './Card.css'; 
//Card is a composition i.e. a reusable wrapper(used to wrap other components/JSX) component with a specific styling common to a few components used to achieve a particular objective

const Card = props => {

    const classes = `card ${props.someClass}`;
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card;