import styled, {css} from 'styled-components';

export const TileElement = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0px 0px 0px 40px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    display: flex;
    flex-wrap: nowrap;

    ${({tileView}) => tileView === "list" && css`
        display: grid;
        grid-gap: 16px;
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr;
        padding: 16px;
    `}

    ${({tileType}) => tileType === "people" && css`
        padding: 10px 15px 65px 16px;
        grid-template-rows: 264px 1fr;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({tileView}) => tileView === "list" && css`
            grid-template-columns: auto 1fr;
            grid-template-rows: 1fr;
        `}

        ${({tileType}) => tileType === "people" && css`
            padding: 8px;
            grid-template-columns: 1fr;
            grid-template-rows: 178px auto;
        `}
    };
`;

export const Image = styled.div`
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    ${({imagePath, tileType}) =>  css`
        background-image: url(https://image.tmdb.org/t/p/${tileType === "movie" ? "w342" : "w185"}/${imagePath});
    `}
    margin: 40px 0px;
    flex-grow: 1;
    border-radius: 5px;

    ${({tileView}) => tileView === "list" && css`
        margin: 0;
        width: 292px;
        height: 434px;
    `}
    ${({tileType}) => tileType === "people" && css`
        width: 177px;
        height: 249px;
    `}
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({imagePath}) =>  css`
            background-image: url(https://image.tmdb.org/t/p/w154/${imagePath});
        `}

        ${({tileView}) => tileView === "list" && css`
            margin: 0px;
            width: 114px;
            height: 169px;
        `}

        ${({tileType}) => tileType === "people" && css`
            margin: 0px;
            width: 120px;
            height: 178px;
        `}
    };
`;
export const DetailBox = styled.div`
    flex-grow: 1;
    margin: 40px;
    display: flex;
    flex-direction: column; 

    ${({tileView}) => tileView === "list" && css`
        margin: 0;
        width: 100%;
        height: 100%;
    `}

`;
export const Header = styled.h2`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 8px 0 0;

    ${({tileView}) => tileView === "list" && css`
        font-weight: 500;
        font-size: 22px;
        line-height: 1.3;
        margin: 0 0 0 0;
    `}
    ${({tileType}) => tileType === "people" && css`
        text-align: center;
        margin-top: -15px;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({tileView}) => tileView === "list" && css`           
            font-size: 16px;
        `}

        ${({tileType}) => tileType === "people" && css`
            font-size: 14px;
            margin-top: -8px;
        `}
    };
`;
export const Subheader = styled.h2`
    font-weight: normal;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0 0;
    color: ${({theme}) => theme.color.darkerGrey};

    ${({tileView}) => tileView === "list" && css`
        font-size: 16px;
        line-height: 1.5;
        margin: 8px 0 0;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({tileView}) => tileView === "list" && css`
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
    ${({next}) => next && css`
        margin: 8px 0 0;
    `}

    ${({tileView}) => tileView === "list" && css`
        margin: 0 0 0;
        flex-shrink: 1;
    `}
    ${({tileView, rate}) => (tileView === "list" && rate) && css`
        flex-grow: 1;
        align-items: flex-end;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({tileView, rate}) => (tileView === "list" && rate) && css`
            height: 24px;
            flex-grow: 0;
            align-items: center;
            margin: 8px 0 0;
        `}
    };
`;
export const AdditionalInfo = styled.span`
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    color: ${({theme}) => theme.color.stormGray};
    ${({content}) => content && css`
        color: ${({theme}) => theme.color.black};
        font-weight: 500;
    `}
`;
export const Genre = styled.div`
    margin-right: 16px;
    background-color: ${({theme}) => theme.color.grey};
    color: ${({theme}) => theme.color.black};
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 100%;

    ${({tileView}) => tileView === "list" && css`
        margin: 8px 8px 0 0;
        line-height: 1.4;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({tileView}) => tileView === "list" && css`
            font-size: 10px;
            line-height: 1.1;
            padding: 4px 8px;
        `}
    };
`;

export const Star = styled.img`
    width: 24px;
    margin: 0 8px 0 0;
    
    ${({tileView}) => tileView === "list" && css`
        margin: 0 12px 0 0;
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 16px;    
        margin: 0 8px 0 0;
    }
`;
export const Rate = styled.div`
    color: ${({theme}) => theme.color.black};
    font-size: 14px;
    margin: 0 8px 0 0;

    ${({number}) => number && css`
    font-size: 22px;
    font-weight: 500;
    `}

    ${({votes}) => votes && css`
        margin: 0 12px 0 0;
    `}

    ${({tileView}) => tileView === "list" && css`
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 12px 0 0;
    `}

    ${({votes, tileView}) => (votes && tileView === "list") && css`
        font-weight: 400;
        color: ${({theme}) => theme.color.darkerGrey};
    `}

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}){
        ${({number, tileView}) => (number && tileView === "list") && css`
            font-size: 13px;
            line-height: 1.3;
            margin: 0 7px 0 0;
        `}

        ${({votes, tileView}) => (votes && tileView === "list") && css`
            height: 100%;
            font-size: 13px;
            line-height: 1.3;
            display: flex;
            align-items: center;
        `}
    };
`;
export const Description = styled.div`
    color: ${({theme}) => theme.color.black};
    font-size: 20px;
    line-height: 1.6;
`;