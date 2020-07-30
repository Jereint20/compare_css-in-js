/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { buttonStyle } from '../../css/common';

interface ButtonProps {
    buttonType: 'primary' | 'secondary' | 'tertiary';
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const themes = {
    primary: css`
        background: #20c997;
        color: white;
        &:hover {
            background: #38d9a9;
        }
        &:active {
            background: #12b886;
        }
    `,
    secondary: css`
        background: #e9ecef;
        color: #343a40;
        &:hover {
            background: #f1f3f5;
        }
        &:active {
            background: #dee2e6;
        }
    `,
    tertiary: css`
        background: none;
        color: #20c997;
        &:hover {
            background: #e6fcf5;
        }
        &:active {
            background: #c3fae8;
        }
    `,
};

const Button = ({ children, buttonType = 'primary', onClick }: ButtonProps) => {
    return (
        <button css={[buttonStyle, themes[buttonType]]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
