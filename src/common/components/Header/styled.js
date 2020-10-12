import styled from "styled-components";

export const HeaderBox = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
    min-height: 94px;
 `;

export const Subheader = styled.div`
    max-width: 1368px;
    margin: auto;
    display: flex;
    min-height: 94px;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        display: flex;
        align-items: center;
        align-content: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        min-height: 142px;
        flex-wrap: wrap;
        justify-content: center;
    }
 `;

 export const MenuBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
       margin: 22px;
    }
 `;