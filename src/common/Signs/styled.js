import styled, { css } from "styled-components";

export const SpinnerBox = styled.div`
    max-width: 1368px;
    margin: 0 auto;
    padding: 180px;
    text-align: center;

    ${({ search }) => search && css`
    padding: 120px;
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding: 120px 0;

        ${({ search }) => search && css`
            padding: 24px;
        `}
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}){
        padding: 168px 0;

        ${({ search }) => search && css`
            padding: 24px;
        `}
    }
`;

export const Spinner = styled.img`
    width: 91px;
    height: 91px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    @keyframes spin {
        from {
            transform:rotate(0deg);
        }
        to {
            transform:rotate(360deg);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 35px;
        height: 35px;
    }
`;