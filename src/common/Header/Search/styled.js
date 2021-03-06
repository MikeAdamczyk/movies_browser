import styled, { css } from "styled-components";

export const SearchBox = styled.div`
    border-radius: 33px;
    width: 432px;
    height: 48px;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.grey};
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-right: 16px;
    transition: 0.3s ease;

    &:hover{
        box-shadow: 0px 1px 10px ${({ theme }) => theme.color.mediumBlue};
        border: 1px solid ${({ theme }) => theme.color.mediumBlue};
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
        width: 288px;
        height: 44px;
        margin-left: 10px;
        margin-right: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {

        margin-bottom: 16px;

        ${({ showMenu }) => showMenu === true && css`
            position: fixed;
            top: 60px;
            right: 0px;
            z-index: 2;
            width: 186px;
            height: 44px;
            margin-right: 16px;
        `}
    }
`;

export const SearchIcon = styled.img`
    width: 22px;
    height: 22px;
    margin: 12px 16px 12px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        width: 14px;
        height: 14px;
        margin: 16px 10px 16px 18px;
    }
`;

export const Input = styled.input`
    background: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    padding-right: 12px;
    border: none;
    outline: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-size: 16px;
        line-height: 17px;
    }
`;