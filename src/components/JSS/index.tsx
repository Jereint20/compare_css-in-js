import React from 'react';
import { createUseStyles } from 'react-jss';
import SlideRight from './Animation';

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
    sectionStyles: {
        boxSizing: 'border-box',
        margin: '1rem',
        padding: '1rem',
        height: '30rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'space-around',
        border: '2px solid #f7df1e',
        borderRadius: 3,

        '@media (min-width: 400px)': {
            flexDirection: 'row',
            height: 'auto',
        },
    },
});

const JSS = () => {
    const classes = useStyles();
    return (
        <section className={classes.sectionStyles}>
            <SlideRight />
        </section>
    );
};

export default JSS;
