import React from 'react';
import '../assets/css/welcome.css';
import transNameLogo from '../assets/img/transparent-name-logo.png';
import { RollInDiv, BouncyDiv, LightSpeedDiv, FadeOutDiv } from './Animations';

export function WelcomeAnimation() {

    return (

        <BouncyDiv>
            <main className='homepage-main'>
                <RollInDiv>
                    <img className='homepage-img' src={transNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
                </RollInDiv>
            </main>
        </BouncyDiv>

    );

}

export function DeleteWelcome() {
    return (
        <FadeOutDiv>
            <main className='homepage-main'>
                <LightSpeedDiv>
                    <img className='homepage-img' src={transNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
                </LightSpeedDiv>
            </main>
        </FadeOutDiv>
    )
}
