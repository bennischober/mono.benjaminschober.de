import React from "react";
import {NavItems} from "./navItems";
import {getCurrentLanguageText} from "../../lang/languageRouter";

export function Navbar() {
    const txt = getCurrentLanguageText(); // MIGHT CHANGE TO DATABASE DATA!

    return(
        <div>
            <NavItems text={txt}/>
        </div>
    );
}