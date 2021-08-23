const {createTheme} = require("@material-ui/core");

let GLOBAL_STYLE = createTheme({
    palette: {
        type: "dark",
        mode: "dark"
    }
});

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.dataset.theme = themeName;
    changeTheme(themeName);
}

function changeTheme(themeName) {
    if (themeName === "dark") {
        GLOBAL_STYLE = createTheme({
            palette: {
                type: themeName,
                mode: themeName,
                primary: {
                    main: "#ffffff",
                },
            },
        });
        return;
    }

    GLOBAL_STYLE = createTheme({
        palette: {
            type: themeName,
            mode: themeName,
            primary: {
                main: "#000000",
            }
        },
    });
}

function getTheme() {
    return GLOBAL_STYLE;
}

module.exports = {
    setTheme,
    getTheme
}