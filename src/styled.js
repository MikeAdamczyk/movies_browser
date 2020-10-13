import styled, { css } from "styled-components";

export const Container = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-auto-rows: 650px;

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        grid-gap: 16px;
        grid-template-columns: 288px;
        grid-auto-rows: auto;
    };

    
`;