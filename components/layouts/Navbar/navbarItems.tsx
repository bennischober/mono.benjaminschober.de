import React from "react";
import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import { LinksGroup } from "./navbarLinks";
import { MdDashboard } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { getBackgroundColor } from "../../../utils/theme";

const mockdata = [
    { label: "Dashboard", icon: MdDashboard, link: "/" },
    {
        label: "Calculations",
        icon: RiNumbersFill,
        links: [
            { label: "PX to REM", link: "/pxtorem" },
            { label: "Forecasts", link: "/" },
            { label: "Outlook", link: "/" },
            { label: "Real time", link: "/" },
        ],
    },
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

export function CompleteNavbar() {
    const { classes } = useStyles();
    const links = mockdata.map((item) => (
        <LinksGroup {...item} key={item.label} />
    ));

    return (
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
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
