const {createTheme} = require("@material-ui/core");

const masterFont = 'Space Mono';
const secondMasterFont = 'Roboto';
const fontFamilyOverwrites = `'${masterFont}', '${secondMasterFont}', 'Helvetica', 'Arial', sans-serif`;


let GLOBAL_STYLE = createTheme({
    palette: {
        type: "dark",
        mode: "dark"
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
                textShadow: "0 2px 5px rgb(127 67 calc(255 / 0.94))",
            }
        }
    }
});
OverrideTheme();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
    changeTheme(themeName);
}

function changeTheme(themeName) {
    GLOBAL_STYLE.palette.type = themeName;
    GLOBAL_STYLE.palette.mode = themeName;
    GLOBAL_STYLE.palette.primary.main = themeName === "dark" ? "#ffffff" : "#000000";
    GLOBAL_STYLE.typography.navbar.color = themeName === "dark" ? "#ffffff" : "#000000";

    OverrideTheme();
}

function OverrideTheme() {
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

    console.log("log in OverrideTheme()");
    console.log(GLOBAL_STYLE);
}

function getTheme() {
    return GLOBAL_STYLE;
}

module.exports = {
    setTheme,
    getTheme
}