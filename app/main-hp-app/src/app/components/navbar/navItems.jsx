import React from "react";
import {ThemeToggle} from "../themeToggle";
import {LanguageToggle} from "../langToggle";
import Grid from '@material-ui/core/Grid';
import {AnchorLink} from "../anchorLink";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch for styles!
// https://create-react-app.dev/docs/title-and-meta-tags/ for meta tags changes!
// https://www.webtips.dev/webtips/react-hooks/element-in-viewport for title changes on scrolling!

export function NavItems(props) {
    const data = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    return (
        <Grid container>
            <Grid item xs={12} sm={3}><AnchorLink href="#about" className="main-links" text={data.about}/></Grid>
            <Grid item xs={12} sm={3}><AnchorLink href="#resume" className="main-links" text={data.resume} /></Grid>
            <Grid item xs={12} sm={3}><AnchorLink href="#projects" className="main-links" text={data.projects} /></Grid>
            <Grid item xs={12} sm={3}>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={12} sm={3}><LanguageToggle text={data.comps.btn.langToggle} onLangChange={onLangChange}/></Grid>
                    <Grid item xs={12} sm={3}><ThemeToggle text={data.comps.btn.themeToggle} onThemeChange={onThemeChange} themeState={themeState}/></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}