import React from "react";
import {DetailsList} from "../../components/detailsList";
import {getMyAge} from "../../../utils/randomHelper";
import {SectionHeadline} from "../../components/sectionHeadline";


export function AboutSection(props) {
    const title = props.text.title;

    const text = props.text.text;
    const age = getMyAge(new Date(1998, 4, 21));

    const language = text.languages.map((item, index) => (index ? ', ' : '') + item);


    const list = [{first: text.ageTerm, second: age}, {first: text.nationalityTerm, second: text.nationality}, {first: text.educationTerm, second: text.education}, {first: text.languagesTerm, second: language}];

    return(
        <section>
            <SectionHeadline id="about">{title}</SectionHeadline>
            <div>
                <div><DetailsList id={1} list={list} /></div>
                <div><DetailsList id={1} list={list} /></div>
            </div>
        </section>
    );
}