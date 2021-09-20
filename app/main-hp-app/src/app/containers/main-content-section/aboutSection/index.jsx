import React from "react";
import {DetailsList} from "../../../components/detailsList";
import {getMyAge} from "../../../../utils/randomHelper";
import {SectionHeadline} from "../../../components/sectionHeadline";
import {Grid} from "@mui/material";
import {FirstPart} from "./firstPart";
import {getTheme} from "../../../../utils/themes";


export function AboutSection(props) {
    const id = props.id;
    const title = props.text.title;
    const theme = getTheme();

    //left part
    const links = props.text.links;
    const leftStyleOverride = {
        textAlign: "right",
        [theme.breakpoints.down('md')]: {
            textAlign: "center"
        }
    };

    // right part
    const text = props.text.text;
    const age = getMyAge(new Date(1998, 4, 21));
    const language = text.languages.map((item, index) => (index ? ', ' : '') + item);
    const list = [{first: text.ageTerm, second: age},
        {first: text.nationalityTerm, second: text.nationality},
        {first: text.educationTerm, second: text.education},
        {first: text.languagesTerm, second: language}];

    return (
        <section id={id}>
            <SectionHeadline id="about">{title}</SectionHeadline>
            <Grid container>
                <Grid item xs={12} md={6} sx={leftStyleOverride}>
                    <FirstPart text={text} links={links} />
                </Grid>
                <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                    <DetailsList id="about-list" list={list}/>
                </Grid>
            </Grid>
        </section>
    );
}