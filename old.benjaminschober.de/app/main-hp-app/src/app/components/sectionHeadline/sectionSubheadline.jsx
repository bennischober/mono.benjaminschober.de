import React from "react";
import {Typography} from "@mui/material";

export function SectionSubHeadline(props) {
    const sx = props.sx;

    return(
        <Typography variant="sectionSubHeadlines" sx={sx}>
            {props.children}
        </Typography>
    );
}