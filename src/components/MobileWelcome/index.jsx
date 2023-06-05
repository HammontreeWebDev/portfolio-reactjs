import React, { useState } from "react";
import './assets/css/mobile-welcome.css';
import mobileVideo from './assets/vid/mobile-intro.mp4';
// import mobileThumb from './assets/img/thumbnail.png';
import { Icon, enableCache } from '@iconify/react';
enableCache("local");

const MobileWelcome = () => {
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }
    return (
        <section className="mobile-container">
            {isLoading && <div className="loading-div">
            <h1>Loading...</h1>
            <Icon className='loading-icon' icon="line-md:loading-loop"></Icon>
            </div>}
            <video className="mobile-video" preload="auto" autoPlay={true} loop={true} muted={true} playsInline={true} src={mobileVideo} onPlay={removeLoader} style={isLoading ? {visibility: "hidden"} : {visibility: "visible"}} />
        </section>
    )
}

export default MobileWelcome;