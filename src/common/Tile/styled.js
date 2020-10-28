import styled, { css } from 'styled-components';

export const TileElement = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0px 0px 0px 40px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: grid;


    ${({ tileView }) => tileView === "detail" && css`
            grid-template-areas: "image detail"
                                "image overview";
            grid-template-columns: 312px auto;
            grid-template-rows: auto 1fr;
    `}
    ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            grid-template-columns: 399px auto;
            grid-template-rows: auto 1fr;
    `}
    ${({ tileView }) => tileView === "list" && css`
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        padding: 16px;
    `}

    ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
        padding: 10px 15px 10px 16px;
        grid-gap: 0;
        grid-template-rows: 264px 1fr auto;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            grid-template-columns: 312px auto;
            grid-template-rows: auto 2fr;
        `}        
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView }) => tileView === "detail" && css`
            grid-template-areas: "image detail"
                                 "overview overview";
            grid-template-columns: 154px auto;
            grid-template-rows: auto auto;
            grid-row-gap: 16px;
            grid-column-gap: 24px;
            padding: 16px;
        `}
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            grid-template-columns: 185px auto;
        `} 
        ${({ tileView }) => tileView === "list" && css`
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr;
        `}

        ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
            padding: 8px;
            grid-template-columns: 1fr;
            grid-template-rows: 178px 1fr auto;
        `}
        
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            grid-template-columns: 114px auto;
            grid-gap: 16px;
        `}      
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            grid-template-columns: 116px auto;
        `}   
    };
`;

export const Image = styled.div`
    background-size: cover;
    background-repeat: no-repeat;

    ${({ imagePath, tileType }) => css`
        background-image: url(https://image.tmdb.org/t/p/${tileType === "movie" ? "w342" : "h632"}/${imagePath});
    `}
    margin: 40px 0px;
    border-radius: 5px;
    height: 464px;

    ${({ tileView }) => tileView === "detail" && css`
            grid-area: image;
    `}

    ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
        height: 564px;
    `}

    ${({ tileView }) => tileView === "list" && css`
        background-position: top;
        margin: 0;
        width: 292px;
        height: 434px;
    `}
    ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
        ${({ imagePath }) => css`
            background-image: url(https://image.tmdb.org/t/p/w185/${imagePath});
        `}
        width: 177px;
        height: 249px;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            height: 434px;
        `}        
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ imagePath }) => css`
            background-image: url(https://image.tmdb.org/t/p/w154/${imagePath});
        `}
        ${({ tileView }) => tileView === "detail" && css`
            height: 231px;
            margin: 0;
        `}
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            ${({ imagePath }) => css`
                background-image: url(https://image.tmdb.org/t/p/w185/${imagePath});
            `}
            height: 278px;
        `}  
        ${({ tileView }) => tileView === "list" && css`
            margin: 0px;
            width: 114px;
            height: 169px;
        `}

        ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
            margin: 0px;
            width: 120px;
            height: 178px;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            height: 169px;
        `}
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "detail") && css`
            height: 163px;
        `}
    };
`;

export const DetailBox = styled.div`
    margin: 40px 40px 0;
    display: flex;
    flex-direction: column; 

    ${({ tileView }) => tileView === "detail" && css`
            grid-area: detail;
        `}

    ${({ tileView }) => tileView === "list" && css`
        margin: 0;
        width: 100%;
        height: 100%;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView }) => tileView === "detail" && css`
            margin: 0;
        `}
    };

`;
export const Header = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 8px 0 0;

    ${({ tileView }) => tileView === "list" && css`
        font-weight: 500;
        font-size: 20px;
        line-height: 1.3;
        margin: 0 0 0 0;
    `}
    ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
        text-align: center;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 30px;
        `}
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView }) => tileView === "list" && css`           
            font-size: 16px;
        `}

        ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
            font-size: 14px;
            margin-top: 8px;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 16px;
            margin: 0 0 0 0;
        `}
    };
`;
export const Subheader = styled.h2`
    font-weight: normal;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0 0;
    color: ${({ theme }) => theme.color.darkerGrey};

    ${({ tileView }) => tileView === "list" && css`
        font-size: 16px;
        line-height: 1.5;
        margin: 8px 0 0;
    `}
    ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
        font-size: 18px;
        text-align: center;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 18px;
            margin: 12px 0 0;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView }) => tileView === "list" && css`
            font-size: 13px;
            line-height: 1.3;
            margin: 4px 0 0;
        `}
        ${({ tileType, tileView }) => (tileType === "people" && tileView === "list") && css`
            margin: 8px 0 0;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 13px;
            line-height: 1.3;
            margin: 4px 0 0;
        `}
    };
`;
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 24px 0 0;
    align-items: center;
    ${({ next }) => next && css`
        margin: 8px 0 0;
    `}

    ${({ tileView }) => tileView === "list" && css`
        margin: 0 0 0;
        flex-shrink: 1;
    `}

    ${({ tileView, rate }) => (tileView === "list" && rate) && css`
        margin-top: 10px;
        flex-grow: 1;
        align-items: flex-end;

    `}
    ${({ tileView, rate }) => (tileView === "detail" && rate) && css`
        align-items: baseline;
    `}
    ${({ tileView, description }) => (tileView === "detail" && description) && css`
            grid-area: overview;
            margin: 24px 40px 40px;
            align-items: flex-start;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView, rate }) => (tileView === "list" && rate) && css`
            height: 24px;
            flex-grow: 0;
            align-items: center;
            margin: 8px 0 0;
        `}
        ${({ tileView }) => tileView === "detail" && css`
            margin: 16px 0 0;
        `}
        ${({ tileView, description }) => (tileView === "detail" && description) && css`
            grid-area: overview;
            margin: 0px 0 0;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            margin: 8px 0 0;
        `}
        ${({ tileView, genres }) => (tileView === "detail" && genres) && css`
            margin: 0 0 0;
        `}
    };
`;

export const AdditionalInfo = styled.span`
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.stormGray};
    ${({ content }) => content && css`
        color: ${({ theme }) => theme.color.black};
        font-weight: 500;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
            font-size: 14px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 12px;
        `}
        ${({ tileView, label }) => (tileView === "detail" && label) && css`
            display: none;
        `}
        ${({ tileType, label }) => (tileType === "people" && label) && css`
            display: initial;
            margin-right: 4px;
        `}
    };
`;
export const Genre = styled.div`
    margin: 0 16px 0 0;
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.black};
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 100%;

    ${({ tileView }) => tileView === "list" && css`
        margin: 8px 8px 0 0;
        line-height: 1.4;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        ${({ tileView }) => tileView === "detail" && css`
            margin: 8px 8px 0 0
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ tileView }) => tileView === "list" && css`
            font-size: 10px;
            line-height: 1.1;
            padding: 4px 8px;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 10px;
            line-height: 1.1;
            padding: 4px 8px;
        `}
    };
`;

export const Star = styled.img`
    width: 24px;
    margin: 0 8px 0 0;
    
    ${({ tileView }) => tileView === "list" && css`
        margin: 0 12px 0 0;
    `}
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({tileView }) => tileView === "list" && css`
            width: 16px; 
        `}
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        width: 16px;    
        margin: 0 8px 0 0;
    }

`;
export const Rate = styled.div`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    margin: 0 12px 0 0;
    ${({ tileView, number }) => (tileView === "detail" && number) && css`
            &:after {
                content: "/10";
                font-size: 14px;
                margin: 0 0 0 8px;
            }
    `}

    ${({ number }) => number && css`
        font-size: 22px;
        font-weight: 500;
    `}

    ${({ votes }) => votes && css`
        margin: 0 12px 0 0;
    `}

    ${({ tileView }) => tileView === "list" && css`
        color: ${({ theme }) => theme.color.woodsmoke};
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 12px 0 0;
    `}

    ${({ votes, tileView }) => (votes && tileView === "list") && css`
        font-weight: 400;
        color: ${({ theme }) => theme.color.darkerGrey};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        ${({ number, tileView }) => (number && tileView === "list") && css`
            font-size: 13px;
            line-height: 1.3;
            margin: 0 7px 0 0;
        `}
        ${({ number, tileView }) => (number && tileView === "detail") && css`
            &:after {
                content: "";
            }
            margin: 0 7px 0 0;
            color: ${({ theme }) => theme.color.woodsmoke};
            font-weight: 600;
        `}

        ${({ votes, tileView }) => (votes && tileView === "list") && css`
            height: 100%;
            font-size: 13px;
            line-height: 1.3;
            display: flex;
            align-items: center;
        `}
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        ${({ tileView }) => tileView === "detail" && css`
            font-size: 13px;
            line-height: 1.3;
            margin: 0 0px 0 0;
        `}
        ${({ tileView, votes }) => (tileView === "detail" && votes) && css`
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: 400;
            color: ${({ theme }) => theme.color.darkerGrey};
        `}
    };
`;
export const Description = styled.div`
    color: ${({ theme }) => theme.color.black};
    text-align: justify;
    margin: 0;
    font-size: 20px;
    line-height: 1.6;
    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        font-size: 18px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        font-size: 14px;
    };
`;

export const NoImagePlug = styled.div`
    background-color: ${({ theme }) => theme.color.plugGray};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`;
export const PlugLogo = styled.img`
    width: 25%;
`;

export const ReadMore = styled.button`
    color: ${({ theme }) => theme.color.darkerGrey};
    background-color: transparent;
    border: none;
    font-size: 0.75em;
    padding: 0;

    &:active {
        filter: brightness(1.5);
    };
    &:focus {
        outline: none;
        border: none;
    };
    &:hover {
        filter: brightness(0.75);
        cursor: pointer;
    }
`;