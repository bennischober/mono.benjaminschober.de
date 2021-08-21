import React from "react";
import {ThemeToggle} from "../themeToggle";

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch for styles!
// https://create-react-app.dev/docs/title-and-meta-tags/ for meta tags changes!
// https://www.webtips.dev/webtips/react-hooks/element-in-viewport for title changes on scrolling!

export function NavItems(props) {
    const data = props.text;
    console.log(data);
    return (
        <div className="navbar-container">
            <div>{data.nav.about}</div>
            <div>{data.nav.resume}</div>
            <div>{data.nav.projects}</div>
            <ThemeToggle/>
        </div>
    );
}