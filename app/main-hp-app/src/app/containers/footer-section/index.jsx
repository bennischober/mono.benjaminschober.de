import React from "react";
import Container from "@material-ui/core/Container";
import {Footer} from "../../components/footer";

export function FooterSection(props) {
    const text = props.text;
    const links = props.links;

    return(
        <Container sx={{maxWidth: "100vw !important"}}>
            <Footer text={text} links={links}/>
        </Container>
    );
}