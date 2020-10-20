import styled from "styled-components";

export const SpinnerBox = styled.div`
    /* justify-content: center; */
    max-width: 1368px;
    margin: 0 auto;
    padding: 96px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 35px;
        height: 35px;
        padding: 12px 0;
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