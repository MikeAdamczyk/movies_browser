import styled, { css } from "styled-components";

export const StyledNavigation = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    text-decoration: none;
    padding-left: 72px;
    transition: 0.3s ease;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        padding-left: 13px;

        ${({ toggle }) => toggle === true && css`
            display: grid;
            grid-template-columns: auto;
            grid-gap: 36px;
            justify-items: end;
            position: fixed;
            top: 114px;
            right: 0px;
            z-index: 2;
            margin-right: 12px;
        `}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        padding-left: 5px;
    }
`;

export const StyledItem = styled.li`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
    }
`;