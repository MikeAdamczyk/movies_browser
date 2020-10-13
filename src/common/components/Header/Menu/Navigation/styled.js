import styled from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    text-decoration: none;
    padding-left: 72px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        padding-left: 13px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px){
        padding-left: 5px;
    }
`;

export const StyledItem = styled.li`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
    }
`;