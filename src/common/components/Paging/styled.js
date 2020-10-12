import styled from "styled-components";

export const Footer = styled.footer`
    text-align: center;
    padding: 11px;
    margin: 40px auto;
    font-size: 14px;
    max-width: 1368px;
    background: ${({ theme }) => theme.color.grey};
`;