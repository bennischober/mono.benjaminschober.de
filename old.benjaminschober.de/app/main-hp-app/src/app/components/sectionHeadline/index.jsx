import React from "react";
import {Container, Typography} from "@mui/material";

export function SectionHeadline(props) {
    const id = props.id;

    return(
        <Container id={id} sx={{
            maxWidth: "100vw!important",
            paddingLeft: "0!important",
            paddingRight: "0!important",
            marginTop: "15%",
            marginBottom: "5%",
            textAlign: "center"
        }}>
            <Typography variant="sectionHeadlines" sx={{textAlign: "center"}}>
                {props.children}
            </Typography>
            <hr/>
        </Container>
    );
}