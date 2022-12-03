import React from 'react';
import '../assets/css/welcome.css';
import transNameLogo from '../assets/img/transparent-name-logo.png';

function Welcome() {

    return (
        <main className='homepage-main'>
            <img className='homepage-img' src={transNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath'/>
        </main>
    );

}

export default Welcome;
