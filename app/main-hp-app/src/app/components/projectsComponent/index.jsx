import React from "react";
import {Box, Button, Fade, Modal, Typography, Backdrop} from "@mui/material";
import YoutubePlayer from "../stdComponents/youtubePlayer";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50vw',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


// article component
// slider component
// modal component
// LinkButton
// other stuff

// move modal stuff to new component => alternative on mobile phone: OPEN VIDEO ON YOUTUBE!
export function ProjectsComponent(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>Watch Video</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Blender Project
                        </Typography>
                        <YoutubePlayer id="Jw7NaOUXT-o"/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}