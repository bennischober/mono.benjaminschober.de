import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

export function NormalImageGallery(props) {
    const data = props.data;
    const path = props.path;
    const images = data.map((item) => <img src={path + item.name} alt={item.alt} id={item.id} key={item.id} onDragStart={handleDragStart}/>)

    return (
        <AliceCarousel infinite
                       items={images}/>
    );
}