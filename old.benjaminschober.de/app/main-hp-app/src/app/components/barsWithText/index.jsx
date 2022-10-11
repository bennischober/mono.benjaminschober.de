import React from "react";
import {Box, LinearProgress, Typography} from "@mui/material";

export function BarsWithText(props) {
    const text = props.text;
    const value = props.value;
    const bsx = props.bsx;
    const tsx = props.tsx;
    const color = props.color;

    return (
        <Box sx={{flexGrow: 1}}>
            <Typography sx={tsx}>{text}</Typography>
            <LinearProgress variant="determinate" value={value} sx={bsx} color={color}/>
        </Box>
    );
}