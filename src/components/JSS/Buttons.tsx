import React from 'react';
import { buttonStyleObj } from '../../css/common';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    button: buttonStyleObj,
    primary: {
        extend: 'button',
        background: '#20c997',
        color: 'white',
        '&:hover': {
            background: '#38d9a9',
        },
        '&:active': {
            background: '#12b886',
        },
    },
    secondary: {
        extend: 'button',
        background: '#e9ecef',
        color: '#343a40',
        '&:hover': {
            background: '#f1f3f5',
        },
        '&:active': {
            background: '#dee2e6',
        },
    },
    tertiary: {
        extend: 'button',
        background: 'none',
        color: '#20c997',
        '&:hover': {
            background: '#e6fcf5',
        },
        '&:active': {
            background: '#c3fae8',
        },
    },
});

interface ButtonProps {
    buttonType: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, buttonType, onClick }: ButtonProps) => {
    const classes = useStyles();
    console.log(buttonType);
    return (
        <button className={classes[buttonType]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
