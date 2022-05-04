import { MantineTheme } from "@mantine/core";

// handle theme, language, and other app settings

export function getBackgroundColor(theme: MantineTheme) {
    return theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0];
}

export function getCurrentYear() {
    return new Date().getFullYear();
}