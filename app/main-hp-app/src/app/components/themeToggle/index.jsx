import React, {useEffect, useState} from "react";
import {setTheme} from "../../../utils/themes";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {IconButton, Tooltip} from "@material-ui/core";

export function ThemeToggle(props) {
    const text = props.text;

    const [toggle, setToggle] = useState('light');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (toggle === "light") {
            setTheme('dark');
            setToggle('dark')
        } else {
            setTheme('light');
            setToggle('light');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setToggle('dark')
        } else if (localStorage.getItem('theme') === 'light') {
            setToggle('light')
        }
    }, [theme])

    return (
        <Tooltip title={text.tooltip}>
            <IconButton
                id="theme-button"
                onClick={handleOnClick}>
                {toggle === "dark" ? <BrightnessHighIcon/> : <Brightness4Icon/>}
            </IconButton>
        </Tooltip>
    );
}