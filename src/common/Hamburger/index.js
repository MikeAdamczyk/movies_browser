import React from "react";
import { useState, useEffect } from "react";
import { HamburgerMenu, Bar, MenuBar, MenuBackground } from "./styled";
import { Nav } from "../Header/Menu/Navigation";
import { GoTopButton } from "../Header/Menu/Navigation/styled";

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

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <MenuBar position={position}>
        <HamburgerMenu position={position} showMenu={menuDisplayed} onClick={onClickMenu}>
          <Bar showMenu={menuDisplayed} bar1 />
          <Bar showMenu={menuDisplayed} bar2 />
          <Bar showMenu={menuDisplayed} bar3 />
        </HamburgerMenu>
        <GoTopButton showMenu={menuDisplayed} onClick={scrollTop}>SEARCH</GoTopButton>
        <Nav showMenu={menuDisplayed} />
      </MenuBar>
      <MenuBackground showMenu={menuDisplayed} position={position} />
    </>
  )
};