import React from "react";
import { useState, useEffect } from "react";
import { HamburgerMenu, Bar, MenuBar, MenuBackground } from "./styled";
import Search from "../Header/Search/index";
import { Nav } from "../Header/Menu/Navigation";

export const Hamburger = ({ pos }) => {

  const [click, setClick] = useState(false);

  useEffect(() => {
    if (pos === "top") {
      setClick(false);
    }
  }, [pos]);

  const onClickMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <MenuBar pos={pos}>
        <HamburgerMenu pos={pos} toggle={click} onClick={onClickMenu}>
          <Bar toggle={click} bar1 />
          <Bar toggle={click} bar2 />
          <Bar toggle={click} bar3 />
        </HamburgerMenu>
        <Search toggle={click} pos={pos} />
        <Nav toggle={click} />
      </MenuBar>
      <MenuBackground toggle={click} pos={pos} />
    </>
  )
};