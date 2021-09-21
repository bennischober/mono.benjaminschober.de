import React from "react";
import {Typography} from "@mui/material";

export function ArticleComponent(props) {
    const head = props.head;
    const sub = props.sub;
    const text = props.text;

    const align = props.align;
    let alignHead, alignSub, alignText;
    if(align.head) alignHead = align.head;
    if(align.sub) alignSub = align.sub;
    if(align.text) alignText = align.text;

    return(
        <React.Fragment>
            <Typography variant="sectionSubHeadlines" sx={alignHead}>{head}</Typography>
            <Typography variant="h5" sx={alignSub}>{sub}</Typography>
            <Typography variant="body" sx={alignText}>{text}</Typography>
        </React.Fragment>
    );
}