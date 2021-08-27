import React from "react";
import Container from "@material-ui/core/Container";
import {TopContent} from "../../components/topContent";

// Idea: for projects use a class and extend it afterwards => basic project => project with image / video / etc.
export function MainContentSection(props) {
    const text = props.text;

    return (
        <Container id="body-container" sx={{maxWidth: "95vw !important"}}>
            <main>
                <TopContent text={text.introduction}/>
                <Container id="main-content-container" sx={{maxWidth: "100vw!important", paddingLeft: "0!important", paddingRight: "0!important", textAlign: "center"}}>
                    <section>
                        <div id="resume">HELLO</div>
                        <div id="about">HELLO</div>
                        <div id="projects">HELLO</div>
                    </section>
                </Container>
            </main>
        </Container>
    );
}
