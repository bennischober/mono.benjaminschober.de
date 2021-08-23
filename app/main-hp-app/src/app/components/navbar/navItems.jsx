import React from "react";
import {ThemeToggle} from "../themeToggle";
import {LanguageToggle} from "../langToggle";
import Grid from '@material-ui/core/Grid';

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch for styles!
// https://create-react-app.dev/docs/title-and-meta-tags/ for meta tags changes!
// https://www.webtips.dev/webtips/react-hooks/element-in-viewport for title changes on scrolling!

export function NavItems(props) {
    const data = props.text;
    console.log(data);

    return (
        <Grid container>
            <Grid item xs={12} sm={3}><a href="#about" className="main-links">{data.nav.about}</a></Grid>
            <Grid item xs={12} sm={3}><a href="#resume" className="main-links">{data.nav.resume}</a></Grid>
            <Grid item xs={12} sm={3}><a href="#projects" className="main-links">{data.nav.projects}</a></Grid>
            <Grid item xs={12} sm={3}>
                <Grid container>
                    <Grid item xs={12} sm={6}><ThemeToggle/></Grid>
                    <Grid item xs={12} sm={6}><LanguageToggle/></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}