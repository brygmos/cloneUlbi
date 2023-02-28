import React from 'react';
import classes from './MyBlockButton.module.css';

const MyBlockButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyBlockButton;
