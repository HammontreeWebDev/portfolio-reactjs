import React from "react";
import './assets/css/mobile-welcome.css';
import mobileVideo from './assets/vid/mobile-intro.mp4';
import mobileThumb from './assets/img/thumbnail.png';

const MobileWelcome = () => {
    // const mobileIntrolEl = document.querySelector('#mobile-intro');

    // async function playVideo() {
    //     await mobileIntrolEl.play();
    // }

    // playVideo();

    return (
        <section className="mobile-container">
            <video id="mobile-intro" className="mobile-video" preload="auto" controls={true} src={mobileVideo} poster={mobileThumb} />
        </section>
    )
}

export default MobileWelcome;