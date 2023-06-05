import React from "react";
import './assets/css/mobile-welcome.css';
import mobileVideo from './assets/vid/mobile-intro.mp4';
import mobileThumb from './assets/img/thumbnail.png';

const MobileWelcome = () => {

    return (
        <section className="mobile-container">
            <video id="mobile-intro" className="mobile-video" preload="auto" autoPlay={true} loop={true} muted={true} playsInline={true} src={mobileVideo} poster={mobileThumb} />
        </section>
    )
}

export default MobileWelcome;