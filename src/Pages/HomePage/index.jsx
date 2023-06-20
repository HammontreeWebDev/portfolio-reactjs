import React from "react";
import './homepage.css';
import { WelcomeAnimation } from "../../components/Welcome";
import MobileWelcome from "../../components/MobileWelcome";


const HomePage = () => {
    let width = window.innerWidth;

    if (width > 540) {
        return (
            <>
            {props.nav}
            <main className="home-page">
                <WelcomeAnimation />
            </main>
            </>
        )
    }
    else if (width <= 540) {
        return (
            <>
            {props.nav}
            <main className="home-page">
                <MobileWelcome />
            </main>
            </>
        )
    }

}

export default HomePage;