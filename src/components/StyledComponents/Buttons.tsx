import React from 'react';
import styled, { css } from 'styled-components';

import { buttonStyle } from '../../css/common';

interface ButtonProps {
    buttonType: string;
    children: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonStyleProps {
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
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

const Button = styled.button`
    ${buttonStyle};
    ${(props: ButtonStyleProps) => {
        console.log(props);
        return props.primary
            ? themes.primary
            : props.secondary
            ? themes.secondary
            : props.tertiary
            ? themes.tertiary
            : null;
    }}
`;

export default function ({ buttonType, children, onClick }: ButtonProps) {
    switch (buttonType) {
        case 'primary':
            return (
                <Button primary onClick={onClick}>
                    {children}
                </Button>
            );
        case 'secondary':
            return (
                <Button secondary onClick={onClick}>
                    {children}
                </Button>
            );
        case 'tertiary':
            return (
                <Button tertiary onClick={onClick}>
                    {children}
                </Button>
            );
        default:
            return <Button onClick={onClick}>{children}</Button>;
    }
}
