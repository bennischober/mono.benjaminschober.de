import React, { useState } from "react";
import { AppShell, useMantineTheme } from "@mantine/core";
import { CompleteNavbar } from "../Navbar";
import { Footer } from "../Footer";
import { AppContainerProps } from "../../types/interfaces";
import { getBackgroundColor } from "../../utils/appHandles";
import { CompleteHeader } from "../Header";

export function AppContainer(props: AppContainerProps) {
    const [opened, setOpened] = useState(false);
    const [navState, setNavState] = useState(true);

    const theme = useMantineTheme();

    const handleNavigation = (opened: boolean) => {
        setOpened(opened);
        // note: needs fallback when changing back to desktop. if mobile closed navbar, desktop navbar is still closed!
        setNavState(!opened);
    };

    return (
        <AppShell
            styles={{
                main: {
                    background: getBackgroundColor(theme),
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={<CompleteNavbar hidden={navState} />}
            header={
                <CompleteHeader
                    handleNavigation={handleNavigation}
                    opened={opened}
                />
            }
        >
            {props.children}
            <Footer
                data={[
                    {
                        title: "Row 1",
                        links: [
                            { label: "link1", link: "https://www.google.com" },
                        ],
                    },
                ]}
            />
        </AppShell>
    );
}
