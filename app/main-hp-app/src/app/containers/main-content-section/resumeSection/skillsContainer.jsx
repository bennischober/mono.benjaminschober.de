import React from "react";
import {BarsWithText} from "../../../components/barsWithText";
import {Grid} from "@mui/material";

export function SkillsContainer(props) {
    const data = props.data;
    const bsx = {
        height: 10,
        borderRadius: 5,
    };
    const tsx = {
        textAlign: "left"
    };

    const allBars = data.map((item, index) => {
        return(
            <Grid item xs={12} sm={6} key={index}>
                <BarsWithText text={item.text} value={item.value} tsx={tsx} bsx={bsx} color="bars"/>
            </Grid>
        );
    });

    return(
        <Grid container spacing={2}>
            {allBars}
        </Grid>
    );
}