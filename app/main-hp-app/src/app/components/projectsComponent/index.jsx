import React from "react";
import {ArticleComponent} from "../articleComponent";
import {Grid} from "@mui/material";
import {VideoModal} from "../modalComponents/videoModal";

const CreateModal = (data) => {
    switch (data?.modal.content.type) {
        case "video":
            return CreateVideoModal(data.buttons.modal.text, data.modal.content);
        case "text":
            return CreateTextModal(data.buttons.modal.text, data.modal.content);
        case "gallery":
            return CreateImageModal(data.buttons.modal.text, data.modal.content);
        default:
            return "";
    }
}

const CreateVideoModal = (button, modal) => {
    return <VideoModal buttonText={button} videoID={modal.data.id} modalText={{title: modal.headline, description: modal.description}}/>;
}

const CreateTextModal = (button, modal) => {
    return "";
}

const CreateImageModal = (button, modal) => {
    return "";
}

const CreateImageGallery = () => {
    return "";
}


// slider component
// LinkButton
// other stuff

// move modal stuff to new component => alternative on mobile phone: OPEN VIDEO ON YOUTUBE!
export function ProjectsComponent(props) {
    const data = props.data;
    const description = data.description;

    let modal = CreateModal(data);
    let gallery = CreateImageGallery();

    return (
        <Grid item xs={12} md={6}>
            <ArticleComponent head={description.headline} sub={description.subHeadline} text={description.description} align={{text: {float: "left", textAlign: "start", marginTop: "0.5em"}}}/>
            {gallery}
            {modal}
        </Grid>
    );
}