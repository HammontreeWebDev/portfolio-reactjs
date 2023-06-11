// import npm pkg for styled components to use for transition and non hover effects
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, rollIn, lightSpeedOut, fadeOut, bounceInDown, flipInX, wobble, zoomInRight, rotateInUpRight, fadeIn, bounce } from 'react-animations';

// ----- Bouncing Animation ------ //
const bounceAnimation = keyframes`${bounceInLeft}`;
export const BouncyDiv = styled.div`
animation: 1.5s ${bounceAnimation}
`;

// ----- RollIn Animation  Div------ //
const rollInAnimation = keyframes`${rollIn}`;
export const RollInDiv = styled.div`
animation: 2.5s ${rollInAnimation}
`;

// ----- RollIn Animation Section------ //
const rollInAnimation2 = keyframes`${rollIn}`;
export const RollInSection = styled.section`
animation: 1.5s ${rollInAnimation2}
`;

// ----- light speed Animation ------ //
const lightSpeedAnimation = keyframes`${lightSpeedOut}`;
export const LightSpeedDiv = styled.div`
animation: 2.5s ${lightSpeedAnimation}
`;

// ----- fadeOut Animation ------ //
const fadeOutAnimation = keyframes`${fadeOut}`;
export const FadeOutDiv = styled.div`
animation: 2.5s ${fadeOutAnimation}
`;

// ----- bounce in down Animation ------ //
const bounceInDownAnimation = keyframes`${bounceInDown}`;
export const BounceInDownHeader = styled.header`
animation: 1s ${bounceInDownAnimation}
`;

// ----- flip in X Animation ------ //
const flipInXAnimation = keyframes`${flipInX}`;
export const FlipInXSection = styled.section`
animation: 1.5s ${flipInXAnimation}
`;

// ----- wobble Animation ------ //
const wobbleAnimation = keyframes`${wobble}`;
export const WobbleDiv = styled.div`
animation: 1.5s ${wobbleAnimation}
`;

// ----- zoomInRight Animation ------ //
const zoomInRightAnimation = keyframes`${zoomInRight}`;
export const ZoomInRightDiv = styled.div`
animation: 1.5s ${zoomInRightAnimation}
`;

// ----- rotateInUpRight Animation ------ //
const rotateInUpRightAnimation = keyframes`${rotateInUpRight}`;
export const RotateInUpRightSection = styled.section`
animation: 1.5s ${rotateInUpRightAnimation}
`;

// fadeIn Animation
const fadeInAnimation = keyframes`${fadeIn}`;
export const FadeInDiv = styled.div`
animation: 1.9s ${fadeInAnimation}
`;

// Simple Bounce Main
const BounceMainAnimation = keyframes`${bounce}`;
export const BounceMain = styled.div`
animation: 1.5s ${BounceMainAnimation}
`