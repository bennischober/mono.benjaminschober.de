import React from "react";

export function StandardLink(props) {
    const href = props.href;

    return (
        <a className="clear cleared-link" href={href}>
            {props.children}
        </a>
    );
}