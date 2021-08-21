import React, {useEffect, useState} from "react";
import {setTheme} from "../../../utils/themes";

export function ThemeToggle() {
    const [toggle, setToggle] = useState('light');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if(toggle === "light") {
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

    return(
        <label>
            <input type="checkbox" onChange={handleOnClick} checked={toggle === "dark"}/>
            Change Theme
        </label>
    );
}