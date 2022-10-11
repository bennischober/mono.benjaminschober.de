import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import {Container} from "@mui/material";

export function AutoplayGallery(props) {
    const data = props.data;
    const path = props.path;
    const interval = props.interval ? props.interval : 5000;
    const animationType = props.animationType ? props.animationType : "slide";
    const animationDuration = props.animationDuration ? props.animationDuration : 1000;
    const images = data.map((item) => <img src={path + item.name} alt={item.alt} id={item.id} key={item.id}/>)

    return (
        <Container sx={{
            maxWidth: "100vw!important",
            paddingLeft: "0!important",
            paddingRight: "0!important",
            paddingTop: "1.5em",
            paddingBottom: "1.5em",
            textAlign: "center"
        }}>
            <AliceCarousel infinite
                           autoPlay
                           autoPlayStrategy="none"
                           autoPlayInterval={interval}
                           animationDuration={animationDuration}
                           animationType={animationType}
                           touchTracking={false}
                           disableDotsControls
                           disableButtonsControls
                           items={images}/>
        </Container>
    );
}