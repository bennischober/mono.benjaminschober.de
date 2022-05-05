import React from "react";
import { Navbar, Group, Code, ScrollArea, createStyles } from "@mantine/core";
import { LinksGroup } from "../NavbarLinks";
import { MdDashboard, MdMovie, MdChecklist } from "react-icons/md";
import { RiNumbersFill } from "react-icons/ri";
import { SiPlotly } from "react-icons/si";
import { CompleteNavbarProps } from "../../types/interfaces";
import { getBackgroundColor } from "../../utils/appHandles";
import { UserButton } from "../UserButton";
import { useSession } from "next-auth/react";

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
        links: [{ label: "Dashboard", link: "movies/dashboard" }],
    },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: getBackgroundColor(theme),
        paddingBottom: 0,
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

    const { data: session, status } = useSession();

    let name = "Not Logged In";
    if (session?.user?.name) {
        name = session.user.name;
    }

    let email = "no@email.com";
    if (session?.user?.email) {
        email = session.user.email;
    }

    return (
        <Navbar
            width={{ sm: 300 }}
            p="md"
            className={classes.navbar}
            hidden={props.hidden}
            style={{ paddingBottom: 0 }}
        >
            <Navbar.Section
                grow
                className={classes.links}
                component={ScrollArea}
            >
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <UserButton name={name} email={email} />
            </Navbar.Section>
        </Navbar>
    );
}
