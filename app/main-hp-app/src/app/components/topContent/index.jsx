import React from "react";
import {Typography} from "@material-ui/core";

export function TopContent(props) {
    const text = props.text;

    // I need redux global theme states to decide whether to use light textShadow or dark textShadow!
    const h1Overwrites = (isFirst) => {
        return (
            {
                fontWeight: "700",
                textShadow: "0 2px 5px rgb(206 206 calc(206 / 0.5));",
                marginTop: isFirst ? "5rem" : "0",
                '@media (min-width:960px)': {
                    marginTop: isFirst ? "10rem" : "0",
                }
            }
        );
    }

    return (
        <header className="css-typing">
            <Typography variant="h1" sx={h1Overwrites(true)} gutterBottom>{text.intro}</Typography>
            <Typography variant="h1" sx={h1Overwrites(false)} gutterBottom>{text.name}</Typography>
            <Typography variant="typedSubheading">{text.sub}</Typography>
        </header>
    );
}