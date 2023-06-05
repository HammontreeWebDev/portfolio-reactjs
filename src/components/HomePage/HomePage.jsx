import React from "react";
import './homepage.css';
import {WelcomeAnimation} from "../Welcome/Welcome";
import MobileWelcome from "../MobileWelcome";


const HomePage = () => {

    return (
        <main className="home-page">
            <WelcomeAnimation />
            <MobileWelcome />
        </main>
    )
}

export default HomePage;