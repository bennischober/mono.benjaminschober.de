import React from "react";
import Grid from "@material-ui/core/Grid";
import {AnchorLink} from "../anchorLink";
import {Typography} from "@material-ui/core";

export function SingleNavItem(props) {
    const xs = props.containerValues.xs;
    const sm = props.containerValues.sm;
    const text = props.text;
    const anchor = props.anchor;

    return(
        <Grid item xs={xs} sm={sm}>
            <AnchorLink className="clear cleared-link" href={anchor}>
                <Typography variant="navbar">
                    {text}
                </Typography>
            </AnchorLink>
        </Grid>
    );
}