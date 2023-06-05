import React, { useState } from 'react';
import './welcome.css';
import introVideo from './assets/vid/web-intro.mp4';
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
            <video id='web-video' preload='auto' src={introVideo} autoPlay={true} muted={true} className='homepage-img' onPlay={removeLoader} onLoadedData={removeLoader} style={isLoading ? {visibility: "hidden"} : {visibility: "visible"}}/>
        </>
    );
}