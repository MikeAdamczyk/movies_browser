import styled from "styled-components";

export const SectionTitle = styled.h1`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    padding: 56px 0 24px;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
        padding: 36px 0 18px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        line-height: 22px;
        padding: 24px 0 12px;
        margin: 0;
    }
`;