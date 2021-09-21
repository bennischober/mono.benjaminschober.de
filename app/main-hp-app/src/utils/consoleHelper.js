const {getCurrentText} = require("../app/lang/languageRouter");
const {getTheme} = require("./themes");

// "private" functions
function GetText() {
    return getCurrentText();
}

function GetTheme() {
    return getTheme();
}

// window bind functions
window.GetText = function () {
    console.log(GetText());
}

window.GetTheme = function () {
    console.log(GetTheme());
}
