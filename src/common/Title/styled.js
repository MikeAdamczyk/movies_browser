import styled from "styled-components";

export const TitleBox = styled.div`
    max-width: 100%;
    margin: 32px auto 0;
`;

export const SectionTitle = styled.h1`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600;
    font-size: 36px;
    line-height: 120%;
    margin: 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        line-height: 22px;
        margin: 24px 0;
    }
`;