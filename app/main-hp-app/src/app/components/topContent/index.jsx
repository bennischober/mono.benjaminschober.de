import React from "react";
import {Typography} from "@material-ui/core";
import {styled} from "@material-ui/system"

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
                marginBottom: !isFirst ? "0.5rem" : "",
                '@media (min-width:960px)': {
                    marginTop: isFirst ? "25vh" : "0",
                    fontSize: "2.5rem",
                    marginBottom: !isFirst ? "2.5rem" : "",
                },
                '@media (min-width:1216px)': {
                    fontSize: "6rem",
                    marginBottom: !isFirst ? "5rem" : "",
                },
                '@media (min-width:1920px)': {
                    marginTop: isFirst ? "35vh" : "0",
                },
            }
        );
    }

    const StyledH1 = styled('h1')(`
    margin: 0;
    line-height: 1;
    `);

    const h2Overwrites = {
        marginTop: "1.5rem",
    }

    return (
        <header className="css-typing">
            <Typography variant="h1" sx={h1Overwrites(true)} gutterBottom>{text.intro}</Typography>
            <Typography variant="h1" sx={h1Overwrites(false)}>{text.name}</Typography>
            <StyledH1><Typography variant="typedSubheading" sx={h2Overwrites}>{text.sub}</Typography></StyledH1>
        </header>
    );
}