import React from 'react';
import styled from 'styled-components';

import { Rotate } from './Animation';
import Button from './Buttons';

const Section = styled.section`
    box-sizing: border-box;
    margin: 1rem;
    padding: 1rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    border: 2px solid palevioletred;
    border-radius: 3px;

    @media (min-width: 400px) {
        flex-direction: row;
        height: auto;
    }
`;

const StyledComponents = () => {
    return (
        <Section>
            <Rotate>
                &lt;{' '}
                <span role="img" aria-label="">
                    💅🏾
                </span>{' '}
                &gt;
            </Rotate>
            <Button buttonType="primary">Primary</Button>
            <Button buttonType="secondary">Secondary</Button>
            <Button buttonType="tertiary">Tertiary</Button>
        </Section>
    );
};

export default StyledComponents;
