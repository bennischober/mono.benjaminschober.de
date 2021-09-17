import React from "react";
import Container from '@mui/material/Container';
import {TopContent} from "../../components/topContent";
import {SectionHeadline} from "../../components/sectionHeadline";
import {AboutSection} from "./aboutSection";

// Idea: for projects use a class and extend it afterwards => basic project => project with image / video / etc.
export function MainContentSection(props) {
    const text = props.text;

    return (
        <Container id="body-container" sx={{maxWidth: "95vw !important"}}>
            <main>
                <TopContent text={text.introduction}/>
                <Container id="main-content-container" sx={{
                    maxWidth: "100vw!important",
                    paddingLeft: "0!important",
                    paddingRight: "0!important",
                    textAlign: "center"
                }}>
                    <section>
                        <AboutSection text={text.sections.about} />
                        <SectionHeadline id="resume">{text.sections.resume.title}</SectionHeadline>
                        <SectionHeadline id="projects">{text.sections.projects.title}</SectionHeadline>
                    </section>
                </Container>
            </main>
        </Container>
    );
}
