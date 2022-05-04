import React from "react";
import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import { LinksGroup } from "../NavbarLinks";
import { MdDashboard, MdMovie, MdChecklist } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { SiPlotly } from "react-icons/si";
import { CompleteNavbarProps } from "../../types/interfaces";
import { getBackgroundColor } from "../../utils/appHandles";

const mockdata = [
    { label: "Dashboard", icon: MdDashboard, link: "/" },
    {
        label: "Calculations",
        icon: RiNumbersFill,
        links: [
            { label: "PX to REM", link: "/pxtorem" },
            { label: "Aspect Ratio", link: "/aspect-ratio" },
            { label: "SSQ", link: "/" },
            { label: "SUS", link: "/" },
            { label: "Bootstrapping", link: "/" },
        ],
    },
    {
        label: "Plotting",
        icon: SiPlotly,
        link: "/plotting",
    },
    {
        label: "ToDo",
        icon: MdChecklist,
        link: "/todo",
    },
    {
        label: "Movies",
        icon: MdMovie,
        links: [
            { label: "Dashboard", link: "movies/dashboard" },
        ],
    }
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: getBackgroundColor(theme),
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
        borderBottom: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[4]
                : theme.colors.gray[3]
        }`,
    },
}));

export function CompleteNavbar(props: CompleteNavbarProps) {
    const { classes } = useStyles();
    const links = mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar
            width={{ sm: 300 }}
            p="md"
            className={classes.navbar}
            hidden={props.hidden}
        >
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
                </Group>
            </Navbar.Section>

            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>
        </Navbar>
    );
}
