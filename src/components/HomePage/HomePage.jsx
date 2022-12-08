import React from "react";
import './homepage.css';
import Typewriter from 'typewriter-effect';
import { FadeInDiv } from '../../utils/Animations';

const HomePage = () => {

    return (
        <main className="home-page">
            <FadeInDiv className="home-page-title">
            <Typewriter
            onInit={(message) => {
                message
                .pauseFor(1000)
                .typeString('Welcome To My Portfolio!')
                .start()      
            }}
            />
            </FadeInDiv>
        </main>
    )
}

export default HomePage;