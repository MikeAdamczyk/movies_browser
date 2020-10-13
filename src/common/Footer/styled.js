import styled, {css} from 'styled-components';

export const Pagination = styled.footer`
max-width: 525px;
height: 36px;
margin: 40px auto 103px;
display: flex;
flex-direction: row;
`;

export const ChangePageButton = styled.button`
margin-right: 12px;
padding: 8px 16px;
height: 36px;
border: none;
border-radius: 5px;
background-color: ${({theme}) => theme.color.lightBlue};
display: flex;
align-items: center;
flex-grow: 0;

&:disabled{
   background-color: ${({theme}) => theme.color.grey};
    }
`;

export const TextButton = styled.span`
color: ${({theme}) => theme.color.darkGrey};
font-size: 14px;
line-height: 1.4;

${({inactive}) => inactive && css`
        color: ${({theme}) => theme.color.black};
        `}
${({directonChange}) => directonChange === "left" && css`
        margin-left: 8px;
    `}
${({directonChange}) => directonChange === "right" && css`
       margin-right: 8px;
    `}
`;

export const Text = styled.span`
margin: 0 16px 0 16px;
font-size: 16px;
line-height: 1.5;
color: ${({theme}) => theme.color.darkerGrey};
align-self: center;
`;

export const Number = styled.span`
margin: 0 8px;
font-weight: 600;
color: ${({theme}) => theme.color.black};
`
