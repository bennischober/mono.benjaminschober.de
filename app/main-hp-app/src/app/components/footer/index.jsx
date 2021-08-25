import React from "react";
import {FooterIconItem} from "./footerIconItem";

export function Footer(props) {
    const text = props.text;
    const links = props.links;

    return(
        <footer>
            <FooterIconItem id="footer-email-icon" link={links.email} icon="email" aria={text.aria.email} tooltip={text.tooltip.email}/>
            <FooterIconItem id="footer-github-icon" link={links.github} icon="github" aria={text.aria.github} tooltip={text.tooltip.github}/>
            <FooterIconItem id="footer-linkedin-icon" link={links.linkedin} icon="linkedin" aria={text.aria.linkedin} tooltip={text.tooltip.linkedin}/>
        </footer>
    );
}