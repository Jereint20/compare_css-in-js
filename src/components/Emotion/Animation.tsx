/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/core';

const bounceKeyframes = keyframes`
    from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -7px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const BounceCss = css`
    display: inline-block;
    animation: ${bounceKeyframes} 1s ease-in-out infinite;
    padding: 2rem 1rem;
    font-size: 1.6rem;
`;

const Bounce = () => {
    return (
        <div css={BounceCss}>
            <span role="img" aria-label="">
                👩‍🎤
            </span>{' '}
        </div>
    );
};

export default Bounce;
