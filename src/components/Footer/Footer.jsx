import React from "react";
import './footer.css';
import { Icon, enableCache } from '@iconify/react';

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

export default function Footer() {

    return (
        <footer>
        <a className='hvr-buzz icon' href="https://github.com/HammontreeWebDev" target="_blank" ><Icon icon="fa:github-square" /></a>
        <a className='hvr-buzz icon' href="https://www.linkedin.com/in/kaileb-hammontree/" target="_blank" ><Icon icon="brandico:linkedin-rect" /></a>
        <a className='hvr-buzz icon' href="https://stackoverflow.com/users/20187731/hammontreewebdev" target="_blank"><Icon icon="cib:stackoverflow" /></a>
        </footer>
        
    )
}

// https://stackoverflow.com/users/20187731/hammontreewebdev