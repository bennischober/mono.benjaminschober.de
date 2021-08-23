import {changeLanguage, getCurrentLanguageText} from "../app/lang/languageRouter";

export function setLanguage(langName) {
    localStorage.setItem('language', langName);
    changeLanguage(langName);
}

export function getLanguage() {
    return getCurrentLanguageText();
}

export function keepLanguage() {
    if (localStorage.getItem('language')) setLanguage(localStorage.getItem('language'));
}