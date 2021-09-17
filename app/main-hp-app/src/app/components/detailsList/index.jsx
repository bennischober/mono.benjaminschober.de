import React from "react";

export function DetailsList(props) {
    const id = props.id;

    const list = props.list;
    const listItems = list.map((item, index) =>
        <li key={index}><b>{item.first}:</b> {item.second}</li>
    );

    return(
        <ul id={id}>
            {listItems}
        </ul>
    );
}