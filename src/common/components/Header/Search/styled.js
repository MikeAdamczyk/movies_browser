import styled from "styled-components";

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

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 288px;
        height: 44px;
        margin-left: 10px;
        margin-right: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}px) {
        margin-bottom: 16px;
    }

`;

export const SearchIcon = styled.img`
    width: 22px;
    height: 22px;
    margin: 12px 16px 12px 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
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


    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        font-size: 13px;
        line-height: 17px;
    }
`;