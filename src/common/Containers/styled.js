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

        ${(({ DataType }) => DataType === "peoplePage" && css`
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

        ${(({ DataType }) => DataType === "peoplePage" && css`
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

export const SliderContainer = styled.div`
    position: relative;
    display: flex;
    max-width: 1368px;
`;

export const Slider = styled.div`
    position: relative;
    margin: 0 0 20px 0;
    padding: 10px 0;
    overflow-y: hidden;
    overflow-x: auto;
    display: grid;
    scroll-behavior: smooth;
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
        &::-webkit-scrollbar {
            display: none;
        };
    }
`;
export const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-100%);
    flex-basis: 20px;
    border-radius: 50px;
    border: none;
    color: ${({theme}) => theme.color.lightGrey};
    background-color: ${({theme}) => theme.color.darkerGrey};
    text-align: center;
    margin: auto 6px;
    padding: 5px 10px;
    transition: 0.5s ease;

    ${({left}) => left && css`
        left: -50px;
    `} 
    ${({right}) => right && css`
        right: -50px;
    `}
    &:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
    &:focus {
        outline: none;
    }
    &:disabled {
        display: none;
    }
    &:active {
        filter: brightness(0.9);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        top: unset;
        bottom: -5px;
        
        ${({left}) => left && css`
            left: 45%;
            transform: translateX(-100%);
        `} 
        ${({right}) => right && css`
            right: 45%;
            transform: translateX(100%);
        `}
    }
`;