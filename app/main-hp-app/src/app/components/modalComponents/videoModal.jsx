import React from "react";
import {FadeModal} from "./fadeModal";
import YoutubePlayer from "../stdComponents/youtubePlayer";

export function VideoModal(props) {
    const buttonText = props.buttonText;
    const modalText = props.modalText;
    const videoID = props.videoID;

    return(
        <FadeModal buttonText={buttonText} title={modalText.title} description={modalText.description}>
            <YoutubePlayer id={videoID}/>
        </FadeModal>
    );
}