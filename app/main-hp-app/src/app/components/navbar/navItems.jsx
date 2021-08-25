import React from "react";
import {ThemeToggle} from "../themeToggle";
import {LanguageToggle} from "../langToggle";
import Grid from '@material-ui/core/Grid';
import {SingleNavItem} from "./navSingleItem";

// https://create-react-app.dev/docs/title-and-meta-tags/ for meta tags changes!
// https://www.webtips.dev/webtips/react-hooks/element-in-viewport for title changes on scrolling!

export function NavItems(props) {
    const data = props.text;
    const onLangChange = props.onLangChange;
    const onThemeChange = props.onThemeChange;
    const themeState = props.themeState;

    return (
        <Grid container alignContent="center">
            <SingleNavItem containerValues={{xs: 12, sm: 3}} text={data.about} anchor="#about" />
            <SingleNavItem containerValues={{xs: 12, sm: 3}} text={data.resume} anchor="#resume" />
            <SingleNavItem containerValues={{xs: 12, sm: 3}} text={data.projects} anchor="#projects" />
            <Grid item xs={12} sm={3}>
                <Grid container justifyContent="flex-end">
                    <Grid item xs={12} sm={6} xl={5}>
                        <LanguageToggle text={data.comps.btn.langToggle} onLangChange={onLangChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6} xl={2}>
                        <ThemeToggle text={data.comps.btn.themeToggle} onThemeChange={onThemeChange} themeState={themeState}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}