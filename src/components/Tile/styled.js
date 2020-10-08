import styled, { css } from 'styled-components';

export const TileElement = styled.div`
    max-width: 1368px;
    margin: 100px auto;
    padding: 0px 0px 0px 40px;
    background-color: ${({theme}) => theme.color.white};
    box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
    display: flex;
    flex-direction: row;
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
    margin: 8px 0;
    align-self: flex-start;
`;