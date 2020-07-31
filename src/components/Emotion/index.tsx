/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Bounce from './Animation';
import Button from './Buttons';

const sectionCss = css`
    box-sizing: border-box;
    margin: 1rem;
    padding: 1rem;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-content: space-around;
    border: 2px solid hotpink;
    border-radius: 3px;

    @media (min-width: 400px) {
        flex-direction: row;
        height: auto;
    }
`;

const Emotion = () => {
    return (
        <section css={sectionCss}>
            <Bounce />
            <Button buttonType="primary">Primary</Button>
            <Button buttonType="secondary">Secondary</Button>
            <Button buttonType="tertiary">Tertiary</Button>
        </section>
    );
};

export default Emotion;
