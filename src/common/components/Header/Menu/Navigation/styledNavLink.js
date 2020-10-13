import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    border: none;
    border-radius: 33px;
    padding: 13.5px 20px;
    margin: 12px;
    transition: 0.5s;

    &:hover{
        background: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
    }

    &.${activeClassName} {
        border: solid 1px ${({ theme }) => theme.color.white};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        padding: 10px 14px;
        margin: 4px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}px){
        padding: 10px 10px;
        margin: 0px;
    }
`;