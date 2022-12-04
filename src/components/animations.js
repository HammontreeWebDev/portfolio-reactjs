// import npm pkg for styled components to use for transition and non hover effects
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, pulse, rubberBand, rollIn, hinge, lightSpeedOut, fadeOut, bounceInDown, tada } from 'react-animations';

// ----- Bouncing Animation ------ //
const bounceAnimation = keyframes`${bounceInLeft}`;
export const BouncyDiv = styled.div`
animation: 1.5s ${bounceAnimation}
`;

// ----- Pulsing Animation ------ //
const pulseAnimation = keyframes`${pulse}`;
export const PulsingDiv = styled.div`
animation: 1.75s ${pulseAnimation}
`;

// ----- Rubber Band Animation ------ //
const rubberBandAnimation = keyframes`${rubberBand}`;
export const RubberBandDiv = styled.div`
animation: 1.75s ${rubberBandAnimation}
`;

// ----- RollIn Animation ------ //
const rollInAnimation = keyframes`${rollIn}`;
export const RollInDiv = styled.div`
animation: 2.5s ${rollInAnimation}
`;

// ----- hinge Animation ------ //
const hingeAnimation = keyframes`${hinge}`;
export const Hinge = styled.div`
animation: 2.5s ${hingeAnimation}
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

// ----- tada Animation ------ //
const tadaAnimation = keyframes`${tada}`;
export const TadaDiv = styled.div`
animation: 3s ${tadaAnimation}
`;

