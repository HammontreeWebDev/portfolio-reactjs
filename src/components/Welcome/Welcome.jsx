import React from 'react';
import './welcome.css';
import transNameLogo from '../../assets/img/transparent-name-logo.png';
import { BouncyDiv, LightSpeedDiv, FadeOutDiv, WobbleDiv } from '../../utils/Animations';

export function WelcomeAnimation() {

    return (

        <BouncyDiv>
            <main className='homepage-main'>
                <WobbleDiv>
                    <img className='homepage-img' src={transNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
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
                    <img className='homepage-img' src={transNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
                </LightSpeedDiv>
            </main>
        </FadeOutDiv>
    )
}
