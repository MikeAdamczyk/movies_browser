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
export const AdditionalInfoBox = styled.div`
    display: flex;
    margin: 24px 0 -16px;
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
