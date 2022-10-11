import React from "react";

export function HoverButton(props) {
    const [style, setStyle] = React.useState({
        color: "black"
    });

    const handleOnMouseOver = () => {
        console.log("hover called!");
        setStyle({
            color: "white"
        });
    }

    const handleOnMouseLeave = () => {
        console.log("end hover!");
        setStyle({
            color: "black"
        });
    }

    return(
        <div onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
            {props.children(style)}
        </div>
    );
}