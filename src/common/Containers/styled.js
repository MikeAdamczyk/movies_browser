import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.large}){
        max-width: 1020px;

        ${(({DataType}) => DataType === "people" && css`
            max-width: 904px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        max-width: 672px;
        
        ${({tileView}) => tileView === "detail" && css`
            max-width: 767px;
        `}
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        max-width: 600px;


        ${(({DataType}) => DataType === "people" && css`
            max-width: 440px;
        `)};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        max-width: 288px;
    }
`;

export const ListContainer = styled.main`
    justify-content: center;
    max-width: 1368px;
    margin: 0 auto;
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, 324px);

    ${(({DataType}) => DataType === "people" && css`
        grid-template-columns: repeat(auto-fill, 208px);
    `)
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        grid-template-columns: repeat(auto-fill, 288px);

        ${(({DataType}) => DataType === "people" && css`
            grid-template-columns: repeat(3, 136px);
            grid-gap: 16px;
        `)};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        margin-left: 16px;
        margin-right: 16px;

        ${(({DataType}) => DataType === "people" && css`
            grid-template-columns: repeat(2, 136px);
            grid-auto-rows: 245px;
            grid-gap: 16px;
        `)};
    }
`;
