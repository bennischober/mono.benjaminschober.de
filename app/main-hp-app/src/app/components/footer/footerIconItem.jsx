import React from "react";
import Link from '@mui/material/Link';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export function FooterIconItem(props) {
    const id = props.id;
    const link = props.link;
    const icon = props.icon;
    const sx = props.sx;

    const sizeOverride = {
        fontSize: 40,
        '@media (min-width:960px)': {
            fontSize: 70
        },
        '@media (min-width:1280px)': {
            fontSize: 100
        },
        "&:hover": {
            color: "rgba(127, 67, 255, 0.938)"
        },
    }

    let iconReturn;
    if (icon === "github") {
        iconReturn = <GitHubIcon sx={sizeOverride}/>;
    } else if (icon === "email") {
        iconReturn = <AlternateEmailIcon sx={sizeOverride}/>;
    } else {
        iconReturn = <LinkedInIcon sx={sizeOverride}/>;
    }

    return (
        <Link id={id} href={link} sx={sx}>
            {iconReturn}
        </Link>
    );
}