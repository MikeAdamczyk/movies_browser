import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";


const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`

    ${(({ tile }) => !tile && css`
        text-decoration: none;
        color: ${({ theme }) => theme.color.white};
        border: none;
        border-radius: 33px;
        padding: 13.5px 20px;
        margin: 12px;
        transition: color 1s, background .5s;

        &:hover{
            background: ${({ theme }) => theme.color.white};
            color: ${({ theme }) => theme.color.black};
        }

        &.${activeClassName} {
            border: solid 1px ${({ theme }) => theme.color.white};
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.medium}){
            padding: 10px 14px;
            margin: 4px;
        }
        @media (max-width: ${({ theme }) => theme.breakpoints.extraSmall}){
            padding: 10px 10px;
            margin: 0;
        }
    `)}

    ${(({ tile }) => tile && css`
        text-decoration: none;
        color: ${({ theme }) => theme.color.black};
        transition: .5s;
    
        &:hover {
            opacity: 0.75;
        }
    `)}
`;