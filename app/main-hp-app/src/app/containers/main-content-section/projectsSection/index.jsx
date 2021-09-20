import React from "react";
import {SectionHeadline} from "../../../components/sectionHeadline";


// for projects:
// https://levelup.gitconnected.com/rendering-3d-objects-and-animation-in-react-using-three-fiber-bf0255e642be => display 3d model
// https://www.npmjs.com/package/react-device-detect => only display 3d model on supported devices!
export function ProjectsSection(props) {
    const id = props.id;
    const text = props.text;
    const title = text.title;

    return(
        <section id={id}>
            <SectionHeadline id="projects">{title}</SectionHeadline>
        </section>
    );
}