import React from "react";
import {Backdrop, Box, Button, Fade, IconButton, Modal, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

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

export function FadeModal(props) {
    const title = props.title ? props.title : "Modal Title";
    const description = props.description ? props.description : "Modal Description";
    const buttonText = props.buttonText ? props.buttonText : "Open Modal";
    const button = props.button ? props.button : "outlined";
    const buttonColor = props.buttonColor ? props.buttonColor : "bars";
    const timeout = props.timeout ? props.timeout : 500;
    const modalStyle = props.modalStyle ? {...style, ...props.modalStyle} : style;


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <Button variant={button} color={buttonColor} onClick={handleOpen}>
                {buttonText}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: timeout,
                }}
            >
                <Fade in={open}>
                    <Box sx={modalStyle}>
                        <IconButton aria-label="close modal" sx={{float: "right"}} color="primary" onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                        <Typography id="modal-title" variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography id="modal-description">
                            {description}
                        </Typography>
                        {props.children}
                    </Box>
                </Fade>
            </Modal>
        </React.Fragment>
    );
}