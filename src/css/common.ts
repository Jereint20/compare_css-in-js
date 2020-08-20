export const buttonStyle = `
    outline: none;
    border: none;
    box-sizing: border-box;
    height: 2rem;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    background: #20c997;
    color: white;
    border-radius: 0.25rem;
    line-height: 1;
    font-weight: 600;
    cursor: pointer;
    &:focus {
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        background: #38d9a9;
    }
    &:active {
        background: #12b886;
    }
`;

// JSS 는 string template 사용시 selectors 및 nest rule 사용 불가
//https://cssinjs.org/jss-plugin-template?v=v10.4.0

export const buttonStyleObj = {
    outline: 'none',
    border: 'none',
    boxSizing: 'border-box',
    height: '2rem',
    fontSize: '0.875rem',
    padding: '0.5rem 1rem',
    background: '#20c997',
    color: 'white',
    borderRadius: '0.25rem',
    lineHeight: 1,
    fontWeight: 600,
    cursor: 'pointer',
    '&:focus': {
        'box-shadow': [0, 0, 8, 'rgba(0, 0, 0, 0.2)'],
    },
    '&:hover': {
        background: '#38d9a9',
    },
    '&:active': {
        background: '#12b886',
    },
};
