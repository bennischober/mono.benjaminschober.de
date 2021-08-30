import React from "react";
import Grid from "@material-ui/core/Grid";
import {AnchorLink} from "../anchorLink";
import {Typography} from "@material-ui/core";

export function SingleNavItem(props) {
    const xs = props.xs;
    const sm = props.sm;
    const md = props.md;
    const text = props.text;
    const anchor = props.anchor;

    return(
        <Grid item xs={xs} sm={sm} md={md}>
            <AnchorLink className="clear cleared-link" href={anchor}>
                <Typography variant="navbar">
                    {text}
                </Typography>
            </AnchorLink>
        </Grid>
    );
}