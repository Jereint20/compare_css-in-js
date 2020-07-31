import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@keyframes slideRight': {
        from: { opacity: 0 },
        to: { opacity: 1 },
    },

    text: {
        display: 'inline-block',
        animation: '$slideRight 1s ease-in-out infinite alternate',
    },
});

const SlideRight = () => {
    const classes = useStyles();
    return <div className={classes.text}>JSS</div>;
};

export default SlideRight;
