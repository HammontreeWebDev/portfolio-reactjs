import React from "react";
import './homepage.css';
import { WelcomeAnimation } from "../Welcome";
import MobileWelcome from "../MobileWelcome";


const HomePage = () => {
    let width = window.innerWidth;

    if (width > 540) {
        return (
            <main className="home-page">
                <WelcomeAnimation />
            </main>
        )
    }
    else if (width <= 540) {
        return (
            <main className="home-page">
                <MobileWelcome />
            </main>
        )
    }

}

export default HomePage;