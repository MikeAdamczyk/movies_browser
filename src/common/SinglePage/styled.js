import styled from "styled-components";

export const Wrapper = styled.div`
    max-height: 770px;
    margin: 94px auto 0;
    display: flex;
    justify-content: center;
    background-color: #000000;
    position: relative;
    z-index: -1;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        margin: 142px auto 0;
    }
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
    text-shadow: 2px 5px 15px black;
    margin-left: 20px;
    transition: 1s;


    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        bottom: 44px;
        margin-left: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        bottom: 32px;
        margin-left: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        bottom: 20px;
        margin-left: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        bottom: 8px;
    }
`;

export const MovieTitle = styled.h1`
    font-weight: 600;
    font-size: 64px;
    line-height: 120%;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        font-size: 44px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-size: 34px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        font-size: 24px;
    }
`;

export const RatingSection = styled.span`
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        margin-top: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        margin-top: 10px;
        flex-direction: row;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        margin-top: 4px;
    }

`;

export const RateBox = styled.span`
    display: flex;
    align-items: baseline;
`;

export const Star = styled.img`
    width: 40px;
    height: 38px;
    margin-right: 8px;
    align-self: center;


    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        width: 32px;
        height: 30px;
        margin-right: 7px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        width: 24px;
        height: 23px;
        margin-right: 6px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        width: 16px;
        height: 15.25px;
        margin-right: 5px;
        align-self: baseline;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        width: 16px;
        height: 15.25px;
        margin-right: 4px;
    }
`;

export const Rate = styled.span`
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-right: 7px;

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        font-size: 26px;
        margin-right: 5px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-size: 22px;
        margin-right: 4px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        font-size: 18px;
        margin-right: 3px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        font-size: 14px;
        margin-right: 2px;
    }
`;

export const RatingInfo = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    margin-top: 16px;
    margin-right: 8px;
    line-height: 120%;

    @media (max-width: ${({ theme }) => theme.breakpoints.big}){
        font-size: 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        font-size: 11px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        font-size: 10px;
    }
`;
export const DetailsContainer = styled.div`
    max-width: 1368px;
    margin: 0 auto 220px;

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
            margin: 0 auto 154px;

        }

        @media (max-width: ${({ theme }) => theme.breakpoints.small}){
            margin: 0 auto 88px;
        }
    `;