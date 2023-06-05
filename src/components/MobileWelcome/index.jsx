import React from "react";
import './assets/css/mobile-welcome.css';
import mobileVideo from './assets/vid/mobile-intro.mp4';

const MobileWelcome = () => {
    return (
        <section className="mobile-container">
            <video className="mobile-video" preload="auto" muted autoPlay loop src={mobileVideo} />
        </section>
    )
}

export default MobileWelcome;