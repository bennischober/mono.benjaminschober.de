// SCRIPT AND FILES MIGHT BE REPLACED BY MONGODB AND GRAPHQL STUFF!

// normal structure:
// ---lang
//    ---lang-code
//       ---lang-code.json


// example:
// ---lang
//    ---de
//       ---de.json

import de from "./de/de.json";
import en from "./en/en.json";

var CURRENT_LANG = "de";

const de_obj = {
    key: "de",
    display: "Deutsch",
    json: de,
};

const en_obj = {
    key: "en",
    display: "English",
    json: en,
};

const allLang = [de_obj, en_obj];

// ToDo: On app start, get lang data on start and store in local object => change on lang swap

/**
 * Returns an object with all language specific data.
 * @param lang: string of language code
 * */
export function getText(lang) {
    let el;
    for(let element of allLang) {
        if(element.key === lang) {
            el = element;
            break;
        }
    }
    return el.json;
}

export function getCurrentLanguageText() {
    return getText(CURRENT_LANG);
}

export function changeLanguage(lang) {
    CURRENT_LANG = lang;
}

export function getAllLangaugesDisplayName() {
    let names = [];
    allLang.forEach(element => names.fill(element.display));
    return names;
}