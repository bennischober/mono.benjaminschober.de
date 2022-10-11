import {setLanguage} from "../../utils/languages";

// SCRIPT AND FILES MIGHT BE REPLACED BY MONGODB AND GRAPHQL STUFF!

// maybe create dictionary to cache language files at execution time => could also be saved IndexedDB / LocalStorage?

var CURRENT_LANG;
var CURRENT_LANG_KEY;
//var CURRENT_PRIVACY_POLICY; // will be used later...
var CURRENT_DICTIONARY;

//***************** FETCH TO SPECIFIC LANGUAGE FILE *****************\\
export function getCurrentText() {
    //if(typeof CURRENT_LANG === undefined) changeLanguage('en');
    return CURRENT_LANG;
}

export function getCurrentLangKey() {
    return CURRENT_LANG_KEY;
}

// second parameter(handleLoadData): invoke data change to rerender frontend
export function changeLanguage(lang, handleLoadData) {
    CURRENT_LANG_KEY = lang;
    getFetchedLanguageText(lang).then((response) => {
        if(checkForLanguageErrors()) {
            CURRENT_LANG = response
            handleLoadData();
        } else {
            // WILL BE REPLACED BY DB DATA INSTEAD OF CALLBACK! => import can be removed later
            setLanguage('en', handleLoadData);
        }
    });
}

// check for errors, before set CURRENT_LANG
function checkForLanguageErrors(response) {
    return typeof response !== undefined;
}

async function getFetchedLanguageText(lang) {
    const response = await fetch(`/static/lang/${lang}/${lang}.json`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).catch(error => console.warn(error));

    return await response.json();
}

//***************** FETCH TO DICTIONARY *****************\\
export function getIndexedLanguageItems() {
    if(typeof CURRENT_DICTIONARY !== "undefined") {
        // MIGHT REWORK CALL OF THIS => SAVE DATA IN THE SPECIFIC FUNCTION TO NOT CALL THIS EVERY TIME!!!
        return CURRENT_DICTIONARY;
    }

    // NOTE: THIS FETCH IS ONLY USED 1 TIME! OTHER CALLS CAN BE CACHED!
    getFetchedDictionaryItems().then((response) => {
        if(checkForIndexErrors) {
            CURRENT_DICTIONARY = response;
        } else {
            console.warn("WTF! else case in getFetchedDictionaryItems()");
            // WILL BE REPLACED BY DATABASE DATA! => THIS ERROR CAN OCCUR ONLY 1 TIME! OTHER CALLS ARE CACHED
            CURRENT_DICTIONARY = [{'key': 'de', "language" : "DEUTSCH"}, {'key': 'en', "language" : "ENGLISH"}];
        }
    });
    return CURRENT_DICTIONARY;
}

// check for errors before set CURRENT_DICTIONARY
function checkForIndexErrors(response) {
    // if error occurs, get data from DB
    return typeof response !== undefined;
}

function getFetchedDictionaryItems() {
    return fetch('/static/lang/language_dictionary.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(function (response) {
        return response.json();
    }).then(function (dictData) {
        return dictData;
    }).catch(error => console.warn(error));
}

//***************** FETCH TO PRIVACY POLICY *****************\\