const {createTheme} = require("@material-ui/core");

let GLOBAL_STYLE = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#000000',
                }
            }
        }
    }
});

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
    overwriteMaterialDesign(themeName);
}

function getTheme() {
    return GLOBAL_STYLE;
}

function keepTheme() {
    if (localStorage.getItem('theme')) setTheme(localStorage.getItem('theme'));
}

function overwriteMaterialDesign(isDark) {
    if (isDark === 'dark1') { // just for debug, change to dark later!
        const theme = createTheme({
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            main: '#ffffff',
                        }
                    }
                }
            }
        });
        GLOBAL_STYLE = theme;
    }
}

module.exports = {
    setTheme,
    keepTheme,
    getTheme
}