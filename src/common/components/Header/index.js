import React from "react";
import Search from "../Search/index";
import { Icon } from "../Menu/Logo";
import LogoSrc from "../Menu/Logo/logo.png"
import { HeaderBox, Subheader } from "./styled";

export const Header = () => (
    <HeaderBox>
        <Subheader>
            <div>
                <Icon src={LogoSrc} alt="" />
                MoviesBrowser
            </div>
            <Search></Search>

        </Subheader>
    </HeaderBox>
);