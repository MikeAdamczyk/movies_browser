import styled, { css } from "styled-components";

export const MenuBar = styled.div`
    ${({ position }) => position === "top" && css`
        display: none;
    `}
`;

export const MenuBackground = styled.div`
        background: radial-gradient(circle, ${({ theme }) => theme.color.black}, ${({ theme }) => theme.color.black});
        width: 0;
        height: 0;
        position: fixed;
        top: 0;
        right: 0;
        border-radius: 50%;
        transform: translate(75%,-28%);
        transition: 0.3s ease;
        z-index: 1;
        opacity: 0.8;

    ${({ showMenu }) => showMenu === true && css`
        width: 550px;
        height: 450px;

        ${({ position }) => position === "top" && css`
            display: none;
        `}
    `}
`;

export const HamburgerMenu = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        width: 35px;
        height: 30px;
        margin: 16px 5px;
        cursor: pointer;
        display: grid;
        grid-column-start: auto;
        align-items: center;
        justify-items: center;
        background-color: ${({ theme }) => theme.color.black};
        opacity: 0.8;
        border-radius: 5px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 2;

        ${({ position }) => position === "top" && css`
            display: none;
        `}

        ${({ showMenu }) => showMenu === true && css`
            background: none;
            margin: 16px;
        `}
    }
`;

export const Bar = styled.div`

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        height: 5px;
        width: 70%;
        background-color: ${({ theme }) => theme.color.white};
        border-radius: 5px;
        transition: 0.3s ease;

        ${({ bar1, showMenu }) => showMenu === true && bar1 && css`
            transform: translateY(10px) rotateZ(-45deg);
        `}

        ${({ bar2, showMenu }) => showMenu === true && bar2 && css`
            opacity: 0;
        `}

        ${({ bar3, showMenu }) => showMenu === true && bar3 && css`
            transform: translateY(-10px) rotateZ(45deg);
        `}
    }
`;