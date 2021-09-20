import React from "react";
import {Container, Typography} from "@mui/material";
import {StandardLink} from "../../../components/stdComponents/StandardLink";
import {getTheme} from "../../../../utils/themes";

export function FirstPart(props) {
    const text = props.text;
    const profession = props.text.profession.map((item, index) => (index ? " / " : "") + item);
    const links = props.links;
    const separator = " / ";

    const theme = getTheme();

    const firstItem = {
        fontSize: "1.25rem",
        marginBottom: "1rem",
        [theme.breakpoints.up("md")]: {
            fontSize: "2rem",
            marginTop: "0.25rem"
        }
    };

    const secondItem = {
        marginBottom: "1rem",
    };

    return(
        <Container sx={{
            maxWidth: "100vw!important",
            paddingLeft: "0!important",
        }}>
            <Typography sx={firstItem}>{text.name}</Typography>
            <Typography sx={secondItem}>{profession}</Typography>
            <Typography variant="styledLinks">
                <StandardLink href={links.cvDE}>
                    {text.cvDE}
                </StandardLink>
            </Typography>
            {separator}
            <Typography variant="styledLinks">
                <StandardLink href={links.cvEN}>
                    {text.cvEN}
                </StandardLink>
            </Typography>
        </Container>
    );
}