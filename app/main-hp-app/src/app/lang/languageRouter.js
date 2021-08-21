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

const CURRENT_LANG = "de";

const de_obj = {
    key: "de",
    json: de,
};

const en_obj = {
    key: "en",
    json: "",
};

const allLang = [de_obj, en_obj];

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