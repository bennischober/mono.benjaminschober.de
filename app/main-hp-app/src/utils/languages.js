import {changeLanguage, getCurrentLanguageText} from "../app/lang/languageRouter";
import {changeLanguageAttribute} from "./updateHeaderItems";

export function setLanguage(langName) {
    changeLanguageAttribute(langName);
    localStorage.setItem('language', langName);
    changeLanguage(langName);
}

export function getLanguage() {
    return getCurrentLanguageText();
}