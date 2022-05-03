import React, { useState } from "react";
import {
    ActionIcon,
    AppShell,
    Navbar,
    Header,
    Text,
    MediaQuery,
    Burger,
    useMantineColorScheme,
    useMantineTheme,
} from "@mantine/core";
import { Footer } from "../Footer";
import Link from "next/link";
import { NavbarNestedProps } from "../../../types/interfaces";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function NavbarNested(props: NavbarNestedProps) {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}
                >
                    <Link href="/">Home</Link>
                    <Link href="/pxtorem">GoTo PXToREM</Link>
                </Navbar>
            }
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
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
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
