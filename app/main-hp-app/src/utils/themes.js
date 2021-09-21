const {createTheme} = require("@mui/material");

const masterFont = 'Space Mono';
const secondMasterFont = 'Roboto';
const fontFamilyOverwrites = `'${masterFont}', '${secondMasterFont}', 'Helvetica', 'Arial', sans-serif`;


let GLOBAL_STYLE = createTheme({
    palette: {
        type: "dark",
        mode: "dark",
        bars: {
            main: "#7f43ffef",
            light: "#b773ff",
            dark: "#532bc4",
            50: "#f0e6ff",
            100: "#d6c1fe",
            200: "#b997fe",
            300: "#9a69ff",
            400: "#7f43ff",
            500: "#5e0dfd",
            600: "#4f06f7",
            700: "#3500ef",
            800: "#0000ea",
            900: "#0000dc",
            contrastText: "rgba(0, 0, 0, 0.87)"
        },
        barsLight: {
            main: "#A379FC",
            light: "#d7a9ff",
            dark: "#704cc8",
            50: "#f1e8fe",
            100: "#d8c7fc",
            200: "#bea1fc",
            300: "#a279fc",
            400: "#8b59fa",
            500: "#733af1",
            600: "#6735ea",
            700: "#552de0",
            800: "#4527d8",
            900: "#251aca",
            contrastText: "rgba(0, 0, 0, 0.87)"
        }
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: "rgba(0, 0, 0, 0.08)"
                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    transition: "none !important"
                }
            }
        }
    },
    typography: {
        h1: {
            fontSize: "3.5rem",
            '@media (min-width:600px)': {
                fontSize: "3.5rem",
            }
        },
        navbar: {
            fontSize: "1rem",
            '@media (min-width: 900px)' : {
                fontSize: "1.5rem",
            },
            color: "#000000",
            fontWeight: "700",
            textDecoration: "unset",
            lineHeight: "1.5",
            letterSpacing: "0em",
            "&:hover": {
                borderBottom: "2px solid",
                textDecoration: "none",
                textShadow: "0 2px 5px rgb(127 67 255 / 94%)",
            }
        },
        typedSubheading: {
            fontSize: "0.7rem",
            '@media (min-width:600px)': {
                fontSize: "1.25rem",
            },
            '@media (min-width:1200px)': {
                fontSize: "2rem",
            },
            color: "#000000",
            fontWeight: "500",
            textDecoration: "unset",
            lineHeight: "1.5",
            letterSpacing: "0em",
            textShadow: "0px 2px 5px rgb(206 206 206 / 50%)",
        },
        sectionHeadlines: {
            fontSize: "2.5rem",
            color: "#000000",
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0em",
            marginBottom: "0.5rem"
        },
        sectionSubHeadlines: {
            fontSize: "2rem",
            color: "#000000",
            fontWeight: "700",
            lineHeight: "1.5",
            letterSpacing: "0em",
        },
        styledLinks: {
            fontSize: "1rem",
            fontWeight: "700",
            color: "#000000",
            "&:hover": {
                borderBottom: "2px solid",
                textDecoration: "none",
                textShadow: "0px 2px 5px rgba(127, 67, 255, 0.938)",
                cursor: "pointer"
            }
        }
    }
});
OverrideThemeFont();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
    changeTheme(themeName);
}

function changeTheme(themeName) {
    // main theme stuff
    GLOBAL_STYLE.palette.type = themeName;
    GLOBAL_STYLE.palette.mode = themeName;
    GLOBAL_STYLE.palette.primary.main = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.palette.text.secondary = themeName === "dark" ? "#ffffffb3" : "#151515b3";
    GLOBAL_STYLE.palette.background.paper = themeName === "dark" ? "#202020" : "#f4f4f4";
    GLOBAL_STYLE.components.MuiIconButton.styleOverrides.root = {
        '&:hover': {
            backgroundColor: themeName === "dark" ? "rgba(255, 255, 255, 0.08)" :  "rgba(0, 0, 0, 0.08)"
        }
    }

    // variants:
    GLOBAL_STYLE.typography.navbar.color = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.typography.navbar.textShadow = themeName === "dark" ? "0 2px 5px rgb(127 67 255 / 50%)" : "0 2px 5px rgb(63 63 63/50%)";
    GLOBAL_STYLE.typography.typedSubheading.color = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.typography.typedSubheading.textShadow = themeName === "dark" ? "0 2px 5px rgb(206 206 206 / 50%)" : "0 2px 5px rgb(63 63 63 / 40%)";
    GLOBAL_STYLE.typography.sectionHeadlines.color = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.typography.sectionSubHeadlines.color = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.typography.styledLinks.color = themeName === "dark" ? "#ffffff" : "#000000";
}

function OverrideThemeFont() {
    GLOBAL_STYLE.typography.fontFamily = `-apple-system, '${masterFont}', '${secondMasterFont}', monospace, BlinkMacSystemFont, 'Segoe UI', 'Oxygen', 'Ubuntu', 'Helvetica Neue', 'Arial', sans-serif`;

    GLOBAL_STYLE.typography.h1.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.h2.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.h3.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.h4.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.h5.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.h6.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.overline.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.subtitle1.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.subtitle2.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.body1.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.body2.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.button.fontFamily = fontFamilyOverwrites;
    GLOBAL_STYLE.typography.caption.fontFamily = fontFamilyOverwrites;
}

function getTheme() {
    return GLOBAL_STYLE;
}

module.exports = {
    setTheme,
    getTheme
}