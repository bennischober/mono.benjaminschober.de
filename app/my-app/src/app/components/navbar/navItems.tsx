import React from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import {slide as Menu} from "react-burger-menu";
import {useMediaQuery} from "react-responsive";
import {SCREENS} from "../responsive";
import {menuStyles} from "./menuStyles";
import {useSelector, useDispatch} from "react-redux";
import {TOGGLE_DARKTHEME} from "../../store/actions";
import {navbarTextColor, navbarTextHover} from "../../../themes";

const ListContainer = styled.ul`
  ${tw`
    flex
    list-none
  `};
`;

const NavItem = styled.li<{ menu?: any }>`
  color: ${navbarTextColor};
  &:hover {
    color: ${navbarTextHover};
  };
  ${tw`
    text-xs
    md:text-base
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
  `};

  ${({menu}) => menu && css`
    ${tw`
        text-white
        text-xl
        mb-3
        focus:text-white
    `};
  `}
`;

export function NavItems() {
    const darkThemeEnabled = useSelector((state: any) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();

    const isMobile = useMediaQuery({maxWidth: SCREENS.sm});

    if (isMobile)
        return (
            <Menu right styles={menuStyles}>
                <ListContainer>
                    <NavItem menu>
                        <a href="#">Home</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Cars</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">About</a>
                    </NavItem>
                    <NavItem menu>
                        <a href="#">Contact us</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        );

    return <ListContainer>
        <NavItem>
            <a href="#">Home</a>
        </NavItem>
        <NavItem>
            <a href="#">Cars</a>
        </NavItem>
        <NavItem>
            <a href="#">About</a>
        </NavItem>
        <NavItem>
            <a href="#">Contact us</a>
        </NavItem>
        <NavItem>
            <p>
                <input
                    type="checkbox"
                    checked={darkThemeEnabled}
                    onChange={() => dispatch({type: TOGGLE_DARKTHEME})}
                />
                <span>Use Dark Theme</span>
            </p>
        </NavItem>
    </ListContainer>
}