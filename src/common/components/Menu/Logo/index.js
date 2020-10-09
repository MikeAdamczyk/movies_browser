import styled from "styled-components";

export const Logo = styled.a`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    max-height: 48px;
`;

export const Icon = styled.img`
    width: 30px;
    padding: 16px;
`;