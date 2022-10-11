import React from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import {StandardLink} from "../stdComponents/StandardLink";
import {getTheme} from "../../../utils/themes";

// might change to class in future => maybe make interactive? AND to check for window resize
// need alternative for mobile!
export function ResumeTimeline(props) {
    const items = props.items;

    const timeLine = items.map((item, index) => {
        return (
            <TimelineItem key={index}>
                <TimelineOppositeContent
                    sx={{m: 'auto 0'}}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    {item.text.date}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: "primary.main"}} />
                    <TimelineDot color="primary" />
                    <TimelineConnector sx={{ bgcolor: "primary.main"}} />
                </TimelineSeparator>
                <TimelineContent sx={{py: '12px', px: 2}}>
                    <Typography variant="h6" component="span">
                        {item.text.title}
                    </Typography>
                    <Typography>{item.text.subtitle}</Typography>
                    <Typography variant="styledLinks">
                        <StandardLink href={item.links.homepage}>
                            Website
                        </StandardLink>
                    </Typography>
                    <Typography>{item.text.organizationName}</Typography>
                </TimelineContent>
            </TimelineItem>
        );
    });

    const theme = getTheme();
    if(theme.breakpoints.values.sm > window.innerWidth) {
        return null;
    }

    return (
        <Timeline position="alternate">
            {timeLine}
        </Timeline>
    );
}