import styled, { css } from "styled-components";

export const Container = styled.main`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;

    ${({ section }) => section === "movies" && css`
        grid-template-columns: repeat(auto-fill, 324px);
        grid-auto-rows: 650px;

        @media (max-width: ${({ theme }) => theme.breakpoints.small}){
            margin: 0 16px 16px;
            grid-template-columns: repeat(auto-fill, 288px);
            grid-auto-rows: 201px;
        }
    `}

    ${({ section }) => section === "people" && css`
        grid-template-columns: repeat(auto-fill, 208px);
        grid-auto-rows: 339px;

        @media (max-width: ${({ theme }) => theme.breakpoints.small}){
            margin: 0 16px 16px;
            grid-template-columns: repeat(auto-fill, 136px);
            grid-auto-rows: 245px;
            grid-gap: 16px;
        }
    `}
`;