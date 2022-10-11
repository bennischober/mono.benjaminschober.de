import React from "react";
import Container from '@mui/material/Container';
import {TopContent} from "../../components/topContent";
import {AboutSection} from "./aboutSection/index";
import {ResumeSection} from "./resumeSection";
import {ProjectsSection} from "./projectsSection";

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
                    <AboutSection text={text.sections.about} id="about-section"/>
                    <ResumeSection text={text.sections.resume} id="resume-section"/>
                    <ProjectsSection text={text.sections.projects} id="projects-section"/>
                </Container>
            </main>
        </Container>
    );
}
