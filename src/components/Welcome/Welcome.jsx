import React, { useState } from 'react';
import './welcome.css';
import introVideo from './assets/vid/web-intro.mp4';

export const WelcomeAnimation = () => {
    const [isLoading, setLoading] = useState(true);

    function removeLoader() {
        setLoading(false)
    }

    return (
        <>
            {isLoading && <h1 id='loader-container'>Loading...</h1>}
            <video id='web-video' preload='auto' src={introVideo} autoPlay muted className='homepage-img' onPlay={removeLoader} style={isLoading ? {visibility: "hidden"} : {visibility: "visible"}}/>
        </>
    );
}