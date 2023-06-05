import React, { useState } from "react";
import './assets/css/mobile-welcome.css';
import mobileVideo from './assets/vid/mobile-intro.mp4';
// import mobileThumb from './assets/img/thumbnail.png';

const MobileWelcome = () => {
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }
    return (
        <section className="mobile-container">
            {isLoading && <h1 id='loader-container'>Loading...</h1>}
            <video className="mobile-video" preload="auto" autoPlay={true} loop={true} muted={true} playsInline={true} src={mobileVideo} onPlay={removeLoader} style={isLoading ? {visibility: "hidden"} : {visibility: "visible"}} />
        </section>
    )
}

export default MobileWelcome;