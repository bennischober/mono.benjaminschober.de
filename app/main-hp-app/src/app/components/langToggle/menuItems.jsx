import React from 'react';
import {MenuItem} from "@material-ui/core";

export function MenuItems(props) {
    const menuData = props.menuData;
    const menuClose = props.onMenuClose;
    const langChange = props.onLangChange;

    function handleOnClick(data) {
        langChange(data);
        menuClose();
    }

    return menuData.map((item) =>
        <MenuItem id={item.key} key={item.key} onClick={() => handleOnClick(item.key)}>{item.display}</MenuItem>
    );
}