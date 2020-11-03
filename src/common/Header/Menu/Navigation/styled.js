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

        ${({ showMenu }) => showMenu === true && css`
            display: grid;
            grid-template-columns: auto;
            grid-gap: 36px;
            justify-items: end;
            position: fixed;
            top: 114px;
            right: 0;
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

export const GoTopButton = styled.button`

    transition: 0.5s ease;
    background: transparent;

    &:hover{
        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
    }

    ${({ position }) => position === "hideButton" && css`
        border: none;
        color: transparent;
        outline: none;
        visibility: hidden;
        position: fixed;
        width: 0;
        bottom: 0;
        right: 0;
    `}

    ${({ position }) => position === "showButton" && css`
        border: 3px solid ${({ theme }) => theme.color.black};
        font-size: 21px;
        line-height: 0px;
        width: 35px;
        height: 30px;
        border-radius: 5px;
        padding: 0px;
        padding-top: 2px;
        margin: 16px 5px;
        cursor: pointer;
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.black};
        opacity: 0.8;
        position: fixed;
        bottom: 0;
        right: 0;
        z-index: 2;

        &:hover{
            border: 3px solid ${({ theme }) => theme.color.black};
        }
    `}


    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        ${({ position }) => position === "showButton" && css`
            font-size: 21px;
            line-height: 0px;
        `}

        ${({ showMenu }) => showMenu === true && css`
            color: ${({ theme }) => theme.color.white};
            border: none;
            border-radius: 33px;
            padding: 10px 14px;
            margin: 14px;
            position: fixed;
            top: 50px;
            right: 0;
            z-index: 5;
            margin-right: 16px;
        `}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        margin-right: 12px;
        padding: 10px;

        ${({ position }) => position === "showButton" && css`
            margin-right: 5px;
            padding: 2px 0 0 0;
        `}
    }
`;