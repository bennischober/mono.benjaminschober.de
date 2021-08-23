import React from "react";

export class AnchorLink extends React.Component {
    constructor(props) {
        super(props);
        this.smoothScroll = this.smoothScroll.bind(this);
    }

    smoothScroll(e) {
        e.preventDefault();
        let offset = () => 0
        if (typeof this.props.offset !== 'undefined') {
            if (!!(this.props.offset && this.props.offset.constructor && this.props.offset.apply)) {
                offset = this.props.offset
            } else {
                offset = () => parseInt(this.props.offset)
            }
        }
        const id = e.currentTarget.getAttribute('href').slice(1)
        const $anchor = document.getElementById(id);
        if(!$anchor) return;
        const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
            top: offsetTop - offset(),
            behavior: 'smooth'
        })
        if (this.props.onClick) {this.props.onClick(e)}
    }

    render() {
        const {offset, text, ...rest} = this.props;
        return(
            <a {...rest} onClick={this.smoothScroll}>{text}</a>
        );
    }
}