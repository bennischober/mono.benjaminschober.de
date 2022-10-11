import React from "react";

export default class YoutubePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.loadVideo = this.loadVideo.bind(this);
        this.onPlayerPause = this.onPlayerPause.bind(this);
        this.onPlayerPlay = this.onPlayerPlay.bind(this);
    }

    componentDidMount = () => {
        // On mount, check to see if the API script is already loaded

        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = this.loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        } else {
            // If script is already there, load the video directly
            this.loadVideo();
        }
    };

    loadVideo = () => {
        const {id} = this.props;

        // the Player object is created uniquely based on the id in props
        this.player = new window.YT.Player(`youtube-player-${id}`, {
            videoId: id,
            host: 'https://www.youtube-nocookie.com',
        });
    };

    onPlayerPause = () => {
        this.player.pauseVideo();
    }

    onPlayerPlay = () => {
        this.player.playVideo();
    }

    /*
    import {Button} from "@mui/material";
    <Button onClick={this.onPlayerPause}>Pause</Button>
    <Button onClick={this.onPlayerPlay}>Play</Button>
    */

    render = () => {
        const {id} = this.props;
        return (
            <div className="video-container">
                <div className="video-responsive">
                    <div id={`youtube-player-${id}`}/>
                </div>
            </div>
        );
    };
}