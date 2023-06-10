import React from "react";
import { FadeInDiv } from "../../utils/Animations";
import './socials.css'
import { Icon, enableCache } from '@iconify/react';

enableCache('local');

function Socials() {
    return (
        <main className="socials-main">
            <section className="social-wrapper">
                <FadeInDiv className="social-container">

                    <h2>GitHub</h2>
                    <a href="https://github.com/HammontreeWebDev" target="_blank" >
                        Visit GitHub
                    </a>

                    <img className="social-img" src="https://github-readme-streak-stats.herokuapp.com/?user=HammontreeWebDev&theme=tokyonight" alt="mystreak" />

                </FadeInDiv>

                <FadeInDiv className="social-container">

                    <h2>LinkedIn</h2>
                    <a href="https://www.linkedin.com/in/kaileb-hammontree/" target="_blank" >
                    Visit LinkedIn
                    </a>

                </FadeInDiv>

                <FadeInDiv className="social-container">

                    <h2>Facebook</h2>
                    <a href="https://www.facebook.com/profile.php?id=100093003297638" target="_blank" >
                    Visit Facebook
                    </a>

                </FadeInDiv>
            </section>
        </main>
    );
}

export default Socials;