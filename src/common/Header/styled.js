import styled, { css } from "styled-components";

export const HeaderBox = styled.header`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    width: 100%;
    min-height: 94px;
    position: fixed;
    top: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        height: 142px;
        ${({ position }) => position === "moved" && css`
            display: none;
        `}
    }
 `;

export const Subheader = styled.div`
    max-width: 1368px;
    margin: auto;
    display: flex;
    min-height: 94px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        align-content: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        flex-wrap: wrap;
        justify-content: center;
        height: 142px;
    }
 `;

export const MenuBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
       margin: 16px;
    }
 `;