import styled, { css } from 'styled-components';

export const TileElement = styled.div`
    max-width: 1368px;
    margin: 100px auto;
    padding: 0px 0px 0px 40px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-wrap: nowrap;

    ${({tileView}) => tileView === "list" && css`
        max-width: 324px;
        height: 650px;
        /* by now height is fixed for styling but after being displayed in grid, it will be deleted */
        flex-direction: column;
        align-items: center;
        padding: 16px 0 0 0;
    `}
`;

export const Image = styled.img`
    margin: 40px 0px;
    flex-grow: 0;
    border-radius: 5px;

    ${({tileView}) => tileView === "list" && css`
        margin: 0px;
    `}
`;
export const DetailBox = styled.div`
    flex-grow: 1;
    margin: 40px;
    display: flex;
    flex-direction: column; 

    ${({tileView}) => tileView === "list" && css`
        margin: 0;
        padding: 16px;
        width: 100%;
        height: 100%;
    `}
`;
export const Header = styled.h1`
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
`;
export const Subheader = styled.h2`
    font-weight: normal;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0 0;
    color: ${({theme}) => theme.color.darkGrey};

    ${({tileView}) => tileView === "list" && css`
        font-size: 16px;
        line-height: 1.5;
        margin: 8px 0 0;
    `}
`;
export const Container = styled.div`
    display: flex;
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
`;
export const AdditionalInfo= styled.span`
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.2;
    color: ${({theme}) => theme.color.stormGray};
    ${({content}) => content && css`
        color: ${({theme}) => theme.color.black};
        font-weight: 500;
    `}

    ${({tileView}) => tileView === "list" && css`
        display: none;
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
`;

export const Star = styled.img`
    width: 24px;
    margin: 0 8px 0 0;
    
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 16px;    
    }

    ${({tileView}) => tileView === "list" && css`
        margin: 0 12px 0 0;
    `}
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
    ${({number, tileView}) => (number && tileView === "list")&& css`
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 12px 0 0;
    `}
    ${({votes, tileView}) => (votes && tileView === "list")&& css`
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        margin: 0 12px 0 0;
        color: ${({theme}) => theme.color.darkGrey};
    `}
`;
export const Description = styled.div`
    color: ${({theme}) => theme.color.black};
    font-size: 20px;
    line-height: 1.6;
`;