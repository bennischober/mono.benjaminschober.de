import React from "react";
import {NavItems} from "./navItems";
import {makeStyles} from "@material-ui/styles";

// might change to emotion styles
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "1rem 0 1rem 0",
        textAlign: "center"
    },
}));

export function Navbar(props) {
    const txt = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    const classes = useStyles();

    // might implement burger menu for mobile here
    return(
        <nav className={classes.root}>
            <NavItems text={txt} onLangChange={onLangChange} onThemeChange={onThemeChange} themeState={themeState}/>
        </nav>
    );
}