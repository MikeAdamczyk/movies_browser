import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    justify-content: center;
    max-width: 1368px;
    margin: 94px auto 0;

    ${({ tileView }) => tileView === "detail" && css`
        margin: 56px auto 0;
    `}

    ${({ tileView }) => tileView === "simpleDetails" && css`
        margin: 150px auto 0;
    `}

    ${(({ DataType }) => (DataType === "people" || DataType === "movie") && css`
        margin: 0 auto;
    `)};

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
            margin: 32px auto 0;
        `}

        ${({ tileView }) => tileView === "simpleDetails" && css`
            max-width: 767px;
            margin: 126px auto 0;
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
        margin: 142px auto 0;

        ${({ tileView }) => tileView === "detail" && css`
            margin: 16px auto 0;
        `}

        ${({ tileView }) => tileView === "simpleDetails" && css`
            margin: 158px auto 0;
        `}

        ${(({ DataType }) => (DataType === "people" || DataType === "movie") && css`
            margin: 0 auto;
        `)};
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