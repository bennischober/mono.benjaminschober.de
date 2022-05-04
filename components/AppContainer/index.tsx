import React, { useState } from "react";
import {
    ActionIcon,
    AppShell,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineColorScheme,
    useMantineTheme,
    Tooltip,
} from "@mantine/core";
import { CompleteNavbar } from "../Navbar";
import { Footer } from "../Footer";
import { AppContainerProps } from "../../types/interfaces";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { getBackgroundColor } from "../../utils/appHandles";

export function AppContainer(props: AppContainerProps) {
    const [opened, setOpened] = useState(false);
    const [navState, setNavState] = useState(true);

    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

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
                <Header height={70} p="md">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => handleNavigation(!opened)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                        <Tooltip
                            label={theme?.colorScheme === "dark" ? "Light Mode" : "Dark Mode"}
                            openDelay={500}
                        >
                            <ActionIcon
                                variant="default"
                                onClick={() => toggleColorScheme()}
                                size={30}
                            >
                                {colorScheme === "dark" ? (
                                    <MdLightMode />
                                ) : (
                                    <MdDarkMode />
                                )}
                            </ActionIcon>
                        </Tooltip>
                    </div>
                </Header>
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
