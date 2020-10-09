import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    font-size: 1.1em;
    padding: 5px;

    &:hover {
        border-bottom: solid 2px white;
    }

    &.${activeClassName} {
        font-weight: bold;
    }
`;