import styled, { css } from "styled-components";

export const MenuBar = styled.div`
    ${({ pos }) => pos === "top" && css`
        display: none;
    `}
`;

export const MenuBackground = styled.div`
        background: radial-gradient(circle, black, black);
        width: 0;
        height: 0;
        position: fixed;
        top: 0;
        right: 0;
        border-radius: 50%;
        transform: translate(60%, -40%);
        transition: 0.3s ease;
        z-index: 1;
        opacity: 0.8;


    ${({ toggle }) => toggle === true && css`
        width: 550px;
        height: 450px;

        ${({ pos }) => pos === "top" && css`
            display: none;
        `}
    `}
`;

export const HamburgerMenu = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        width: 35px;
        height: 30px;
        margin: 16px;
        cursor: pointer;
        display: grid;
        grid-column-start: auto;
        align-items: center;
        justify-items: center;
        background-color: black;
        opacity: 0.8;
        border-radius: 5px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;

        ${({ pos }) => pos === "top" && css`
            display: none;
        `}

        ${({ toggle }) => toggle === true && css`
            background: none;
        `}
    }
`;

export const Bar = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        height: 5px;
        width: 70%;
        background-color: white;
        border-radius: 5px;
        transition: 0.3s ease;

        ${({ toggle }) => toggle === true && css`
            background-color: white;
        `}

        ${({ bar1, toggle }) => toggle === true && bar1 && css`
            transform: translateY(10px) rotateZ(-45deg);
        `}

        ${({ bar2, toggle }) => toggle === true && bar2 && css`
            opacity: 0;
        `}

        ${({ bar3, toggle }) => toggle === true && bar3 && css`
            transform: translateY(-10px) rotateZ(45deg);
        `}
    }

`;