import React from "react";
import './footer.css';
import { Icon, enableCache } from '@iconify/react';

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

export default function Footer() {

    return (
        <footer>
            <section className="footer-row">
                <a className='hvr-icon-spin icon' href="https://github.com/HammontreeWebDev" target="_blank" rel="noopener noreferrer" ><Icon className="hvr-icon" icon="fa:github-square" /></a>
                <a className='hvr-icon-spin icon' href="https://www.linkedin.com/in/kaileb-hammontree/" target="_blank" rel="noopener noreferrer" ><Icon className="hvr-icon" icon="brandico:linkedin-rect" /></a>
                <a className='hvr-icon-spin icon' href="https://www.facebook.com/profile.php?id=100093003297638" target="_blank" rel="noopener noreferrer"><Icon className="hvr-icon" icon="fa6-brands:square-facebook" /></a>
            </section>
            <section className="footer-row">
            <p id="copyright">Copyright © 2023. Hammontree Full-Stack Solutions LLC.</p>
            </section>
        </footer>

    )
}

// https://stackoverflow.com/users/20187731/hammontreewebdev