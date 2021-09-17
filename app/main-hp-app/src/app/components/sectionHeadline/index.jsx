import React from "react";
import {Typography} from "@mui/material";

export function SectionHeadline(props) {
    const id = props.id;

    return(
        <div id={id}>
            <Typography variant="sectionHeadlines" sx={{textAlign: "center"}}>
                {props.children}
            </Typography>
            <hr/>
        </div>
    );
}