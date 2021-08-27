import React from "react";
import {Typography} from "@material-ui/core";

export function SectionHeadline(props) {

    return(
        <Typography variant="sectionHeadlines" sx={{textAlign: "center"}}>
            {props.children}
        </Typography>
    );
}