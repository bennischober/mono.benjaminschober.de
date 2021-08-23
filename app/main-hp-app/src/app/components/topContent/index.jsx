import React from "react";
import {TopText} from "./topText";

export function TopContent(props) {
    const text = props.text;

    return(
        <header className="css-typing">
            <TopText text={text.intro} cname="main"/>
            <TopText text={text.name} cname="main"/>
            <TopText text={text.sub}/>
        </header>
    );
}