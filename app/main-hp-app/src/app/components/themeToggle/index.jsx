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

    return (
        <Tooltip title={text.tooltip}>
            <IconButton
                id="theme-button"
                onClick={() => themeState === "dark" ? handleOnClick("light") : handleOnClick("dark")}>
                {themeState === "dark" ? <BrightnessHighIcon color="primary"/> : <Brightness4Icon color="primary"/>}
            </IconButton>
        </Tooltip>
    );
}