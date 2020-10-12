import React from "react";
import Search from "./Search/index";
import LogoSrc from "./Menu/Logo/logo.png"
import { HeaderTitle, Icon, Wrapper, Logo } from "./Menu/Logo";
import { HeaderBox, Subheader, MenuBox } from "./styled";
import { Nav } from "./Menu/Navigation/index";

export const Header = () => (
    <HeaderBox>
        <Subheader>
            <MenuBox>
                <Logo href="/">
                    <Wrapper>
                        <Icon src={LogoSrc} alt="" />
                        <HeaderTitle>Movies&nbsp;Browser</HeaderTitle>
                    </Wrapper>
                </Logo>

                <Nav />
            </MenuBox>

            <Search />

        </Subheader>
    </HeaderBox>
);