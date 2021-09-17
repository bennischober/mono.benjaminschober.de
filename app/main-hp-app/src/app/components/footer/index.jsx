import React from "react";
import {FooterIconItem} from "./footerIconItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"
import {getCurrentYear} from "../../../utils/randomHelper";
import {StandardLink} from "../stdComponents/StandardLink";
import {styled} from "@mui/styles";

const StyledFooter = styled('footer')({
    textAlign: "center"
});

const iconStyle = {
    padding: '1em',
}

export function Footer(props) {
    const text = props.text;
    const links = props.links;
    const copyrightText = `${text.copyrightSymbol} ${getCurrentYear()} ${text.copyrightText}`;

    return (
        <StyledFooter>
            <Grid container sx={{marginTop: "15%", marginBottom: "5%"}}>
                <Grid item xs={12}>
                    <Typography variant="sectionHeadlines">{text.contact}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <FooterIconItem id="footer-email-icon" link={links.email} icon="email" aria={text.aria.email}
                                    tooltip={text.tooltip.email} sx={iconStyle}/>
                    <FooterIconItem id="footer-github-icon" link={links.github} icon="github" aria={text.aria.github}
                                    tooltip={text.tooltip.github} sx={iconStyle}/>
                    <FooterIconItem id="footer-linkedin-icon" link={links.linkedin} icon="linkedin"
                                    aria={text.aria.linkedin} tooltip={text.tooltip.linkedin} sx={iconStyle}/>
                </Grid>
                <Grid item xs={12} sx={{marginBottom: "5%", marginTop: "1%"}}>
                    <Typography variant="styledLinks">
                        <StandardLink href="https://www.google.de">
                            {text.privacyPolicy}
                        </StandardLink>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">{copyrightText}</Typography>
                </Grid>
            </Grid>
        </StyledFooter>
    );
}