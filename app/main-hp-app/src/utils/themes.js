const {createTheme} = require("@material-ui/core");

const masterFont = 'Space Mono';
const secondMasterFont = 'Roboto';
const fontFamilyOverwrites = `'${masterFont}', '${secondMasterFont}', 'Helvetica', 'Arial', sans-serif`;


let GLOBAL_STYLE = createTheme({
    palette: {
        type: "dark",
        mode: "dark"
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        backgroundColor: "rgba(0, 0, 0, 0.08)"
                    }
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
        navbar: {
            fontSize: "1.5rem",
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
            fontSize: "2rem",
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