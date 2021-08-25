import React from "react";
import {NavItems} from "./navItems";
import {styled} from '@material-ui/system';


const StyledNav = styled('nav')(`
    flex-grow: 1;
    margin: 1rem 0 1rem 0;
    text-align: center;
`);


export function Navbar(props) {
    const txt = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    // might implement burger menu for mobile here
    return (
        <StyledNav>
            <NavItems text={txt} onLangChange={onLangChange} onThemeChange={onThemeChange} themeState={themeState}/>
        </StyledNav>
    );
}