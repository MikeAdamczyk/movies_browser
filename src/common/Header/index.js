import React from "react";
import Search from "./Search/index";
import { Nav } from "./Menu/Navigation/index";
import LogoSrc from "../../images/logo.png"
import { HeaderTitle, Icon, Wrapper, Logo } from "./Menu/Logo/styled";
import { HeaderBox, Subheader, MenuBox } from "./styled";

export const Header = () => (
    <HeaderBox>
      <Subheader>
        <MenuBox>
          <Logo href="/">
            <Wrapper>
              <Icon src={LogoSrc} alt=""/>
              <HeaderTitle>Movies&nbsp;Browser</HeaderTitle>
            </Wrapper>
          </Logo>
          <Nav/>
        </MenuBox>
        <Search/>
      </Subheader>
    </HeaderBox>
);