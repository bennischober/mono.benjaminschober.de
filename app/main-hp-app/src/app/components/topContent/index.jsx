import React from "react";
import {Typography} from "@material-ui/core";

export function TopContent(props) {
    const text = props.text;

    return(
        <header className="css-typing">
            <Typography variant="h1" gutterBottom>{text.intro}</Typography>
            <Typography variant="h1" gutterBottom>{text.name}</Typography>
            <Typography variant="subtitle1" gutterBottom>{text.sub}</Typography>
        </header>
    );
}