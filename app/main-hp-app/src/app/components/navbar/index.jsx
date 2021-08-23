import React from "react";
import {NavItems} from "./navItems";
import {getCurrentLanguageText} from "../../lang/languageRouter";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export function Navbar() {
    const txt = getCurrentLanguageText(); // MIGHT CHANGE TO DATABASE DATA!

    const classes = useStyles();

    return(
        <nav className={classes.root}>
            <NavItems text={txt}/>
        </nav>
    );
}