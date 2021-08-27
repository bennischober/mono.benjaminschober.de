import React from 'react';
import {MenuItem} from "@material-ui/core";

export function MenuItems(props) {
    const menuData = props.menuData;
    const menuClose = props.onMenuClose;
    const langChange = props.onLangChange;
    const activeItem = props.activeItem;

    function handleOnClick(data) {
        langChange(data);
        menuClose();
    }

    return menuData.map((item) =>
        <MenuItem selected={activeItem === item.key} disabled={activeItem === item.key} id={item.key} key={item.key} onClick={() => handleOnClick(item.key)}>{item.language}</MenuItem>
    );
}