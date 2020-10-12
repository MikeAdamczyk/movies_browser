import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-auto-rows: 650px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px){
        grid-template-columns: repeat(auto-fill, 320px);
    }
`;