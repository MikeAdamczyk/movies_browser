import styled from "styled-components";

export const Logo = styled.a`
    text-decoration: none;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

export const Icon = styled.img`
    margin-left: 22px;
    margin-right: 16px;
    width: 31px;
    height: 23px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        width: 13px;
        height: 10px;
        margin-left: 18px;
        margin-right: 10px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
        margin-left: 5px;
    }
`;

export const HeaderTitle = styled.p`
    color: ${({ theme }) => theme.color.white};
    font-weight: 500;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: -1.5px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
        font-size: 13px;
        line-height: 130%;
        letter-spacing: -0.5px;
    }
`;