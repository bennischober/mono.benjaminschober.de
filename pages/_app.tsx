import "../styles/globals.css";
import { useState, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import {
    MantineProvider,
    ColorSchemeProvider,
    ColorScheme,
} from "@mantine/core";
import { NavbarNested } from "../components/layouts/Navbar";
import { getLocalStorageItem, setLocalStorageItem } from "../utils/browserHandles";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;


    const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
    const toggleColorScheme = (value?: ColorScheme) => {
        const theme : string = value || (colorScheme === "dark" ? "light" : "dark");
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
        setLocalStorageItem("theme", theme);
    }
        
    useEffect(() => {
        const storedTheme = getLocalStorageItem("theme");
        if (storedTheme) handleTheme(storedTheme as ColorScheme);
    }, []);

    const handleTheme = (theme: ColorScheme) => {
        setColorScheme(theme);
    };
    

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        colorScheme: colorScheme,
                    }}
                >
                    <NavbarNested>
                        <Component {...pageProps} />
                    </NavbarNested>
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}

