import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@keyframes flicker': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },

    text: {
        padding: [32, 16],
        display: 'inline-block',
        animation: '$flicker 1s ease-in-out infinite alternate',
    },
});

const Flicker = () => {
    const classes = useStyles();
    return <div className={classes.text}>JSS</div>;
};

export default Flicker;
