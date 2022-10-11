import {changeLanguage, getCurrentText, getIndexedLanguageItems, getCurrentLangKey} from "../app/lang/languageRouter";
import {changeLanguageAttribute} from "./updateHeaderItems";

export function setLanguage(langName, handleLoadData) {
    changeLanguageAttribute(langName);
    localStorage.setItem('language', langName);
    changeLanguage(langName, handleLoadData);
}

export function getLanguage() {
    return getCurrentText();
}

export function getLanguageIndex() {
    return getIndexedLanguageItems();
}

export function getLanguageKey() {
    return getCurrentLangKey();
}