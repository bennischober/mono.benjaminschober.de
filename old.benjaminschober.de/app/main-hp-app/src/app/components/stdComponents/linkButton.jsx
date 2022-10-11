import React from "react";
import {StandardLink} from "./StandardLink";
import {Button} from "@mui/material";

const existCheck = (sx) => {
    if(!sx) {
        return {
            color: "",
            textTransform: "uppercase"
        };
    }
    return sx;
}

export function LinkButton(props) {
    const text = props.text;
    const link = props.link;
    const variant = props.variant ? props.variant : "contained";

    let sx = existCheck(props.sx);
    // always use uppercase as text transform
    sx.textTransform = "uppercase";

    if(props.white) sx.color = "white";
    if(props.black) sx.color = "black";

    let color = props.color;
    if(!props.color) color = "bars";

    if(props.style) sx = {...(existCheck(sx)), ...props.style};

    return(
        <StandardLink href={link}>
            <Button variant={variant} color={color} sx={sx}>
                {text}
            </Button>
        </StandardLink>
    );
}