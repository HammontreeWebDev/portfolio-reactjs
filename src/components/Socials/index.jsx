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

                    <Icon className="social-icon" icon="raphael:github" />
                    <a href="https://github.com/HammontreeWebDev" target="_blank" >
                        Visit GitHub
                    </a>

                    <img className="social-img" src="https://github-readme-streak-stats.herokuapp.com/?user=HammontreeWebDev&theme=city-lights&hide_border=true" alt="mystreak" />

                </FadeInDiv>

                <FadeInDiv className="social-container">

                    <Icon className="social-icon" icon="uil:linkedin-alt" />
                    <a href="https://www.linkedin.com/in/kaileb-hammontree/" target="_blank" >
                        Visit LinkedIn
                    </a>

                    <iframe className="frame-dimensions" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7071853194078789633" title="Hammontree Full-Stack Solutions LLC LinkedIn Post"></iframe>

                </FadeInDiv>

                <FadeInDiv className="social-container">

                    <Icon className="social-icon" icon="tabler:brand-facebook" />
                    <a href="https://www.facebook.com/profile.php?id=100093003297638" target="_blank" >
                        Visit Facebook
                    </a>

                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhammontreefullstacksolutions%2F%3Fshow_switched_toast%3D0%26show_invite_to_follow%3D0%26show_switched_tooltip%3D0%26show_podcast_settings%3D0%26show_community_review_changes%3D0%26show_community_rollback%3D0%26show_follower_visibility_disclosure%3D0&tabs&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="auto" title="Hammontree Full-Stack Solutions LLC Facebook Page"></iframe>

                </FadeInDiv>
            </section>
        </main>
    );
}

export default Socials;