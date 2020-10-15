import styled from "styled-components";

export const TitleBox = styled.div`
    max-width: 100%;
    margin: auto;
`;

export const SectionTitle = styled.h2`
    color: ${({ theme }) => theme.color.black};
    font-weight: 600px;
    font-size: 36px;
    line-height: 120%;
    margin: 56px 0 24px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 18px;
        line-height: 22px;
        margin: 24px 0 12px 0;
    }
`;