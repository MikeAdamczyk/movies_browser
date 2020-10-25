import React from "react";
import { StyledNavigation, StyledItem } from "./styled";
import { StyledNavLink } from "./styledNavLink";

export const Nav = ({toggle}) => (
    <nav>
        <StyledNavigation toggle={toggle}>
            <StyledItem>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
            </StyledItem>

            <StyledItem>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
            </StyledItem>
        </StyledNavigation>
    </nav>
);