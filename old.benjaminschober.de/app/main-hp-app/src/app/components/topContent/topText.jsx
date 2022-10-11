import React from "react";
import {Box} from "@mui/material";

export function TopText(props) {
    const text = props.text;
    const cname = props.cname;

    return(
        cname === "main" ? <Box sx={{fontSize: 'h1.fontSize'}}>{text}</Box> : <p className="secondary-header-text">{text}</p>
    );
}