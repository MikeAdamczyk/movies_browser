import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 150px auto 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}){
        max-width: 1020px;

        ${(({ DataType }) => DataType === "people" && css`
            max-width: 904px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        max-width: 672px;

        ${({ tileView }) => tileView === "detail" && css`
            max-width: 767px;
        `}
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        max-width: 600px;


        ${(({ DataType }) => DataType === "people" && css`
            max-width: 440px;
        `)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        max-width: 288px;
        margin-top: 166px;
    }
`;

export const ListContainer = styled.main`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);

    ${(({ DataType }) => DataType === "people" && css`
        grid-template-columns: repeat(auto-fill, 208px);
    `)
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: repeat(auto-fill, 288px);

        ${(({ DataType }) => DataType === "people" && css`
            grid-template-columns: repeat(3, 136px);
            grid-gap: 16px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        margin-left: 16px;
        margin-right: 16px;

        ${(({ DataType }) => DataType === "people" && css`
            grid-template-columns: repeat(2, 136px);
            grid-gap: 16px;
        `)};
    }
`;
export const Slider = styled.div`
    margin: 20px 0; 
    padding: 10px 0;
    overflow-y: hidden;
    overflow-x: auto;
    display: grid;
    grid-gap: 24px;
    ${({tilesNumber}) => css`
        grid-template-columns: repeat(${tilesNumber}, 208px);
    `};
    ${({tilesNumber, listType}) => listType === "movie" && css`
        grid-template-columns: repeat(${tilesNumber}, 324px);
    `};
    &::-webkit-scrollbar {
        background-color: #F5F5FA;
        border-radius: 10px;
    };
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px #74788B;
        border-radius: 10px;
    };
    &::-webkit-scrollbar-thumb {
        background: #74788B;
        border-radius: 10px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({tilesNumber}) => css`
            grid-template-columns: repeat(${tilesNumber}, 136px);
        `};
        ${({tilesNumber, listType}) => listType === "movie" && css`
            grid-template-columns: repeat(${tilesNumber}, 288px);
        `};
    }
`;