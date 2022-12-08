import React from "react";
import './footer.css';
import { Icon, enableCache } from '@iconify/react';
import Swal from 'sweetalert2';

// allow iconify icons to be stored locally for quicker rendering
enableCache('local');

export default function Footer() {

    // alert until linkedin is active again
    const linkedInAlert = () => {
        Swal.fire({
            icon: 'info',
            title: 'LinkedIn Unavailable',
            text: 'Sorry, that this is not available right now. Please check back soon.'
        })
    }

    return (
        <footer>
        <a className='hvr-buzz icon' href="https://github.com/HammontreeWebDev" ><Icon icon="fa:github-square" /></a>
        <a className='hvr-buzz icon' onClick={linkedInAlert} ><Icon icon="brandico:linkedin-rect" /></a>
        <a className='hvr-buzz icon' href="https://stackoverflow.com/users/20187731/hammontreewebdev"><Icon icon="cib:stackoverflow" /></a>
        </footer>
        
    )
}

// https://stackoverflow.com/users/20187731/hammontreewebdev