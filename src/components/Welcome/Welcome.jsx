import React from 'react';
import './welcome.css';
import introVideo from './assets/vid/web-intro.mp4';
import { Icon, enableCache } from '@iconify/react';

enableCache('local');

// props
export const WelcomeAnimation = () => {

    return (
        <>
            <Icon className='loading-icon' icon="line-md:loading-alt-loop" />
            <video autoPlay muted className='homepage-img' >
                <source src={introVideo} type='video/mp4' />
            </video>
        </>
    );

}