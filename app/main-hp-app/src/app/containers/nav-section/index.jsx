import React from "react";
import Container from "@material-ui/core/Container";
import {Navbar} from "../../components/navbar";

export function NavSection(props) {
    const text = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    return (
        <Container sx={{maxWidth: "100vw !important"}}>
            <Navbar text={text} onLangChange={onLangChange} onThemeChange={onThemeChange} themeState={themeState}/>
        </Container>
    );
}