import React from "react";
import {ThemeToggle} from "../themeToggle";
import {LanguageToggle} from "../langToggle";
import Grid from '@material-ui/core/Grid';

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
            <Grid item xs={12} sm={3}><a href="#about" className="main-links">{data.about}</a></Grid>
            <Grid item xs={12} sm={3}><a href="#resume" className="main-links">{data.resume}</a></Grid>
            <Grid item xs={12} sm={3}><a href="#projects" className="main-links">{data.projects}</a></Grid>
            <Grid item xs={12} sm={3}>
                <Grid container>
                    <Grid item xs={12} sm={6}><LanguageToggle text={data.comps.btn.langToggle} onLangChange={onLangChange}/></Grid>
                    <Grid item xs={12} sm={6}><ThemeToggle text={data.comps.btn.themeToggle} onThemeChange={onThemeChange} themeState={themeState}/></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}