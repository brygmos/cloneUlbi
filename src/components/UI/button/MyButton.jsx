import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export const MyDangerButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.dangerBtn}>
            {children}
        </button>
    );
};

export default MyButton;