import styled, { css } from "styled-components";

export const Backdrop = styled.div`
    max-height: 770px;
    margin: 0 auto 64px;
    display: flex;
    justify-content: center;
    background-color: #000000;
    position: relative;
    z-index: -1;
`;

export const PosterBox = styled.div`
    background:
    linear-gradient(270deg, #000000 2%, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.8) 8%, rgba(0, 0, 0, 0.5) 14%, rgba(0, 0, 0, 0.3) 18%, rgba(0, 0, 0, 0) 25%),
    linear-gradient(90deg, #000000 2%, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.8) 8%, rgba(0, 0, 0, 0.5) 14%, rgba(0, 0, 0, 0.3) 18%, rgba(0, 0, 0, 0) 25%),
    linear-gradient(180deg, #000000 1%, rgba(0, 0, 0, 0.89555) 4%, rgba(0, 0, 0, 0.4) 14%, rgba(0, 0, 0, 0.2) 18%, rgba(0, 0, 0, 0) 28%),
    linear-gradient(190deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.8) 85%, #000000 92%);
    position: relative;
    max-height: 770px;
    max-width: 1368px;

`;

export const Poster = styled.img`
    max-height: 769px;
    max-width: 100%;
    position: relative;
    z-index: -1;
`;

export const MovieInfo = styled.div`
    position: absolute;
    left: 0;
    bottom: 56px;
    color: white;
`;

export const MovieTitle = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
`;

export const RatingSection = styled.span`
    margin-top: 25px;
    margin-bottom: 17px;
    display: flex;
    align-items: center;
`;

export const RateBox = styled.span`
    display: flex;
    align-items: flex-end;
`;

export const Star = styled.img`
    width: 40px;
    height: 38px;
    margin-right: 8px;
`;

export const Rate = styled.span`
    font-weight: 500;
    font-size: 30px;
    line-height: 130%;
    margin-right: 7px;
`;

export const RatingInfo = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;

    ${({ rate }) => rate === "rate" && css`
        line-height: 180%;
    `}
`;