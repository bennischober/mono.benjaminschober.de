import React from "react";
import {SectionHeadline} from "../../../components/sectionHeadline";
import {ProjectsComponent} from "../../../components/projectsComponent";
import {Grid} from "@mui/material";

export function ProjectsSection(props) {
    const id = props.id;
    const text = props.text;
    const title = text.title;
    const projects = text.data.map((item, index) => <ProjectsComponent key={index} data={item}/>)

    return (
        <section id={id}>
            <SectionHeadline id="projects">{title}</SectionHeadline>
            <Grid container spacing={2} >
                {projects}
            </Grid>
        </section>
    );
}