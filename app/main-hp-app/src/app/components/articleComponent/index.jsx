import React from "react";
import {Typography} from "@mui/material";

export function ArticleComponent(props) {
    const head = props.head;
    const sub = props.sub;
    const text = props.text;

    return(
        <div>
            <Typography variant="sectionSubHeadlines">{head}</Typography>
            <Typography variant="h4">{sub}</Typography>
            <Typography variant="body">{text}</Typography>
        </div>
    );
}