import React from "react";
import {SectionHeadline} from "../../../components/sectionHeadline";
import {ProjectsComponent} from "../../../components/projectsComponent";
import {LinkButton} from "../../../components/stdComponents/linkButton";

export function ProjectsSection(props) {
    const id = props.id;
    const text = props.text;
    const title = text.title;

    return(
        <section id={id}>
            <SectionHeadline id="projects">{title}</SectionHeadline>
            <LinkButton text="hello" link="hello"/>
            <ProjectsComponent />
        </section>
    );
}