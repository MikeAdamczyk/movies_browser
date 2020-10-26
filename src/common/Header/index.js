import React, { useState, useEffect } from "react";
import Search from "./Search/index";
import { Nav } from "./Menu/Navigation/index";
import { Hamburger } from "../Hamburger/index";
import LogoSrc from "../../images/logo.png"
import { HeaderTitle, Icon, Wrapper, Logo } from "./Menu/Logo/styled";
import { HeaderBox, Subheader, MenuBox } from "./styled";

export const Header = () => {
    const [position, setPosition] = useState("top");

    useEffect(() => {
        document.addEventListener("scroll", e => {
            let pagePosition = document.scrollingElement.scrollTop;
            if (pagePosition >= 120) {
                setPosition("moved")
            } else {
                setPosition("top")
            }
        })
    }, []);

    return (
        <>
            <HeaderBox position={position}>
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
                    <Search position={position} />
                </Subheader>
            </HeaderBox>
            <Hamburger position={position} />
        </>
    )
};