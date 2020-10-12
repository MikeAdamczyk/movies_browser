import styled from "styled-components";

export const MoviesContainer = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);
    grid-auto-rows: 650px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px){
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
        grid-template-columns: repeat(auto-fill, 288px);
        grid-auto-rows: 201px;
    }
`;

export const PeopleContainer = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 208px);
    grid-auto-rows: 339px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        margin-left: 16px;
        margin-right: 16px;
        margin-bottom: 16px;
        grid-template-columns: repeat(auto-fill, 136px);
        grid-auto-rows: 245px;
        grid-gap: 16px;
    }
`;