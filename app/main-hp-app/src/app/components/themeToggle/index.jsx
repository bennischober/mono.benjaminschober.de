import React from "react";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {IconButton, Tooltip} from "@material-ui/core";

export function ThemeToggle(props) {
    const text = props.text;
    const changeTheme = props.onThemeChange;
    const themeState = props.themeState;

    const handleOnClick = (nextState) => {
        changeTheme(nextState);
    };

    const fontOverride = {
        fontSize: '1.25rem',
        '@media (min-width:1200px)': {
            fontSize: "1.5rem",
        },
    }

    return (
        <Tooltip title={text.tooltip}>
            <IconButton
                id="theme-button"
                onClick={() => themeState === "dark" ? handleOnClick("light") : handleOnClick("dark")}>
                {themeState === "dark" ? <BrightnessHighIcon color="primary" sx={fontOverride}/> : <Brightness4Icon color="primary" sx={fontOverride}/>}
            </IconButton>
        </Tooltip>
    );
}