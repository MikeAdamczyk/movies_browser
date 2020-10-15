import styled from "styled-components";

export const Backdrop = styled.div`
    max-height: 770px;
    margin: 0 auto 64px;
    text-align: center;
    background-color: #000000;
    position: relative;
    z-index: -1;
`;

export const PosterBox = styled.div`
    background:
    linear-gradient(270deg, #000000 2%, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.8) 8%, rgba(0, 0, 0, 0.5) 14%, rgba(0, 0, 0, 0.2) 18%, rgba(0, 0, 0, 0) 25%),
    linear-gradient(90deg, #000000 2%, rgba(0, 0, 0, 0.9) 5%, rgba(0, 0, 0, 0.8) 8%, rgba(0, 0, 0, 0.5) 14%, rgba(0, 0, 0, 0.3) 18%, rgba(0, 0, 0, 0) 25%),
    linear-gradient(180deg, #000000 1%, rgba(0, 0, 0, 0.89555) 4%, rgba(0, 0, 0, 0.4) 14%, rgba(0, 0, 0, 0.2) 18%, rgba(0, 0, 0, 0) 28%),
    linear-gradient(190deg, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0.4) 70%, rgba(0, 0, 0, 0.6) 75%, rgba(0, 0, 0, 0.8) 85%, #000000 92%);
`;

export const Poster = styled.img`
    max-height: 769px;
    max-width: 100%;
    position: relative;
    z-index: -1;
`;