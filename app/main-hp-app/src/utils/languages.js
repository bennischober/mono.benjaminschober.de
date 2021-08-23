import {changeLanguage, getCurrentLanguageText} from "../app/lang/languageRouter";

function setLanguage(langName) {
    localStorage.setItem('language', langName);
    changeLanguage(langName);
}

function getLanguage() {
    return getCurrentLanguageText();
}

function keepLanguage() {
    if (localStorage.getItem('theme')) setLanguage(localStorage.getItem('theme'));
}

module.exports = {
    keepLanguage,
    setLanguage,
    getLanguage
}