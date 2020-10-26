import React from "react";
import { useState, useEffect } from "react";
import { HamburgerMenu, Bar, MenuBar, MenuBackground } from "./styled";
import Search from "../Header/Search/index";
import { Nav } from "../Header/Menu/Navigation";

export const Hamburger = ({ position }) => {

  const [menuDisplayed, setMenuDisplayed] = useState(false);

  useEffect(() => {
    if (position === "top") {
      setMenuDisplayed(false);
    }
  }, [position]);

  const onClickMenu = () => {
    setMenuDisplayed(!menuDisplayed);
  };

  return (
    <>
      <MenuBar position={position}>
        <HamburgerMenu position={position} showMenu={menuDisplayed} onClick={onClickMenu}>
          <Bar showMenu={menuDisplayed} bar1 />
          <Bar showMenu={menuDisplayed} bar2 />
          <Bar showMenu={menuDisplayed} bar3 />
        </HamburgerMenu>
        <Search showMenu={menuDisplayed} position={position} />
        <Nav showMenu={menuDisplayed} />
      </MenuBar>
      <MenuBackground showMenu={menuDisplayed} position={position} />
    </>
  )
};