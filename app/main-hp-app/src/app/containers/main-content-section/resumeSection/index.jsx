import React from "react";
import {SectionHeadline} from "../../../components/sectionHeadline";
import {ResumeTimeline} from "../../../components/resumeTimeline";
import {SectionSubHeadline} from "../../../components/sectionHeadline/sectionSubheadline";
import {SkillsContainer} from "./skillsContainer";

// ToDo: Add below SkillsContainer => Accordion with all Programming languages / programms I have worked with => language/programm opens modal with infos
export function ResumeSection(props) {
    const id = props.id;
    const text = props.text;
    const title = text.title;

    return(
        <section id={id}>
            <SectionHeadline id="resume">{title}</SectionHeadline>
            <SectionSubHeadline sx={{textAlign: "center"}}>
                {text.experience.title}
            </SectionSubHeadline>
            <ResumeTimeline items={text.experience.text.data}/>
            <SectionSubHeadline sx={{textAlign: "center"}}>
                {text.skills.title}
            </SectionSubHeadline>
            <SkillsContainer data={text.skills.data} />
        </section>
    );
}