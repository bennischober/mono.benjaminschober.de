import React from "react";
import {Typography} from "@material-ui/core";

export function TopContent(props) {
    const text = props.text;

    // I need redux global theme states to decide whether to use light textShadow or dark textShadow!
    const h1Overwrites = (isFirst) => {
        return (
            {
                fontWeight: "700",
                textShadow: "0 2px 5px rgb(206 206 206 / 50%);",
                marginTop: isFirst ? "5rem" : "0",
                fontSize: "1.75rem",
                marginBottom: !isFirst? "0" : "",
                '@media (min-width:960px)': {
                    marginTop: isFirst ? "25vh" : "0",
                    fontSize: "2.5rem",
                    marginBottom: !isFirst? "2.5rem" : "",
                },
                '@media (min-width:1216px)': {
                    fontSize: "6rem",
                    marginBottom: !isFirst? "5rem" : "",
                },
                '@media (min-width:1920px)': {
                    marginTop: isFirst ? "35vh" : "0",
                },
            }
        );
    }

    const h2Overwrites = {
        marginTop: "1.5rem",
        fontSize: "0.75rem",
        '@media (min-width:960px)': {
            fontSize: "1.25rem",
        },
        '@media (min-width:1216px)': {
            fontSize: "2rem",
        }
    }

    return (
        <header className="css-typing">
            <Typography variant="h1" sx={h1Overwrites(true)} gutterBottom>{text.intro}</Typography>
            <Typography variant="h1" sx={h1Overwrites(false)}>{text.name}</Typography>
            <h1><Typography variant="typedSubheading" sx={h2Overwrites}>{text.sub}</Typography></h1>
        </header>
    );
}