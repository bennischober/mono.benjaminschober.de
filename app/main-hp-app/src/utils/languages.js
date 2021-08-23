import {changeLanguage, getCurrentLanguageText} from "../app/lang/languageRouter";

export function setLanguage(langName) {
    localStorage.setItem('language', langName);
    changeLanguage(langName);
}

export function getLanguage() {
    return getCurrentLanguageText();
}