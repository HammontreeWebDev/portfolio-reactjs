import React from "react";
import './footer.css';
import { Icon, enableCache } from '@iconify/react';

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

export default function Footer() {
    return (
        <footer>
        <Icon className="icon" icon="fa:github-square" />
        <Icon className="icon" icon="brandico:linkedin-rect" />
        <Icon className="icon" icon="cib:stackoverflow" />
        </footer>
        
    )
}

// https://stackoverflow.com/users/20187731/hammontreewebdev