import React from "react";
import {NavItems} from "./navItems";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "1rem 0 1rem 0"
    },
}));

export function Navbar(props) {
    const txt = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    const classes = useStyles();

    return(
        <nav className={classes.root}>
            <NavItems text={txt} onLangChange={onLangChange} onThemeChange={onThemeChange} themeState={themeState}/>
        </nav>
    );
}