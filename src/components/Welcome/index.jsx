import React, { useState } from 'react';
import './welcome.css';
import introVideo from './assets/vid/final-web-intro.mp4';
import { Icon, enableCache } from '@iconify/react';
enableCache('local');

export const WelcomeAnimation = () => {
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }

    return (
        <>
            {isLoading && <div className="loading-div">
            <h1>Loading...</h1>
            <Icon className='loading-icon' icon="line-md:loading-loop"></Icon>
            </div>}
            <video id='web-video' preload="auto" autoPlay={true} loop={true} muted={true} playsInline={true} src={introVideo} className='homepage-img' onPlay={removeLoader} onLoadedData={removeLoader} style={isLoading ? {visibility: "hidden"} : {visibility: "visible"}}/>
        </>
    );
}