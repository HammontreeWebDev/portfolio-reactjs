import React from 'react';
import './welcome.css';
import transNameLogo from '../../assets/img/transparent-name-logo.webp';
import transNameLogo300 from '../../assets/img/transparent-name-logo-300.webp';
import transNameLogo1470 from '../../assets/img/transparent-name-logo-1470.webp';
import transNameLogo2060 from '../../assets/img/transparent-name-logo-2060.webp';
import transNameLogo2520 from '../../assets/img/transparent-name-logo-2520.webp';
import transNameLogo2900 from '../../assets/img/transparent-name-logo-2900.webp';
import transNameLogo3240 from '../../assets/img/transparent-name-logo-3240.webp';
import transNameLogo3550 from '../../assets/img/transparent-name-logo-3550.webp';

import { BouncyDiv, LightSpeedDiv, FadeOutDiv, WobbleDiv } from '../../utils/Animations';

export function WelcomeAnimation() {

    return (

        <BouncyDiv>
            <main className='homepage-main'>
                <WobbleDiv>
                    <img className='homepage-img' src={transNameLogo} srcSet={`${transNameLogo300} 300w, ${transNameLogo1470} 1470w, ${transNameLogo2060} 2060w, ${transNameLogo2520} 2520w, ${transNameLogo2900} 2900w, ${transNameLogo3240} 3240w, ${transNameLogo3550} 3550w`} sizes='100vw' alt='Avatar of Kaileb with his name and text that says Full-Stack Web Development' />
                </WobbleDiv>
            </main>
        </BouncyDiv>

    );

}

export function DeleteWelcome() {
    return (
        <FadeOutDiv>
            <main className='homepage-main'>
                <LightSpeedDiv>
                    <img className='homepage-img' src={transNameLogo} srcSet={`${transNameLogo300} 300w, ${transNameLogo1470} 1470w, ${transNameLogo2060} 2060w, ${transNameLogo2520} 2520w, ${transNameLogo2900} 2900w, ${transNameLogo3240} 3240w, ${transNameLogo3550} 3550w`} sizes='100vw' alt='Avatar of Kaileb with his name and text that says Full-Stack Web Development' />
                </LightSpeedDiv>
            </main>
        </FadeOutDiv>
    )
}
