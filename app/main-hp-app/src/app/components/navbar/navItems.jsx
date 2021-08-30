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
    const alignment = {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        rowGap: '1em',
        '@media (min-width:600px)': {
            rowGap: '2em',
        },
        '@media (min-width:900px)': {
            justifyContent: 'unset',
            rowGap: 'unset',
        }
    }

    return (
        <Grid container sx={alignment}>
            <SingleNavItem xs={12} sm={4} md={3} text={data.about} anchor="#about" />
            <SingleNavItem xs={12} sm={4} md={3} text={data.resume} anchor="#resume" />
            <SingleNavItem xs={12} sm={4} md={3} text={data.projects} anchor="#projects" />
            <Grid item xs={12} sm={4} md={3}>
                <Grid container justifyContent="flex-end" alignItems="center">
                    <Grid item xs={12} sm={9} xl={5}>
                        <LanguageToggle text={data.comps.btn.langToggle} onLangChange={onLangChange}/>
                    </Grid>
                    <Grid item xs={12} sm={3} xl={2}>
                        <ThemeToggle text={data.comps.btn.themeToggle} onThemeChange={onThemeChange} themeState={themeState}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}