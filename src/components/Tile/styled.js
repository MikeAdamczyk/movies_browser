import styled, { css } from 'styled-components';

export const TileElement = styled.div`
    max-width: 1368px;
    margin: 100px auto;
    padding: 0px 0px 0px 40px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-wrap: nowrap;
`;

export const Image = styled.img`
    margin: 40px 0px;
    flex-grow: 0;
    border-radius: 5px;
`;
export const DetailBox = styled.div`
    flex-grow: 1;
    margin: 40px;
    height: 400px;
    display: flex;
    flex-direction: column; 
`;
export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    line-height: 1.2;
    margin: 8px 0 0;
    align-self: flex-start;
`;
export const Subheader = styled.h2`
    font-weight: 400;
    font-size: 22px;
    line-height: 1.2;
    margin: 24px 0 0;
    align-self: flex-start;
    color: ${({theme}) => theme.color.darkGrey};
`;
export const Container = styled.div`
    display: flex;
    margin: 24px 0 0;
    align-items: center;
    ${({next}) => next && css`
        margin: 8px 0 0;
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
`;
export const Genre = styled.div`
    margin-right: 16px;
    background-color: ${({theme}) => theme.color.grey};
    color: ${({theme}) => theme.color.black};
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 100%;
`;

export const Star = styled.img`
    width: 24px;
    margin: 0 8px 0 0;
    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        width: 16px;    
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
`;
