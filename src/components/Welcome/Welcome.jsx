import React from 'react';
import './welcome.css';
import introVideo from './assets/vid/web-intro.mp4';
import { Icon, enableCache } from '@iconify/react';
import posterImg from '../../assets/img/poster.png';

enableCache('local');

// props
export const WelcomeAnimation = () => {
    return (
        <>
            <video preload='auto' autoPlay muted className='homepage-img' poster={posterImg}>
                <source src={introVideo} type='video/mp4' />
            </video>
        </>
    );

}