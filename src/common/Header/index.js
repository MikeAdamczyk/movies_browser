import React from "react";
import Search from "./Search/index";
import LogoSrc from "./Menu/Logo/logo.png"
import { HeaderTitle, Icon, Wrapper, Logo } from "./Menu/Logo/styled";
import { HeaderBox, Subheader, MenuBox } from "./styled";
import { Nav } from "./Menu/Navigation/index";
import { useState, useEffect } from "react";
import { Hamburger } from "../Hamburger/index";

export const Header = () => {

    const [pos, setPos] = useState("top");

    useEffect(() => {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 120) {
                setPos("moved")
            } else {
                setPos("top")
            }
        })
    }, [])


    return (
        <>
            <HeaderBox pos={pos}>
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

                    <Search pos={pos}/>

                </Subheader>
            </HeaderBox>
            <Hamburger pos={pos} />
        </>

    )
};