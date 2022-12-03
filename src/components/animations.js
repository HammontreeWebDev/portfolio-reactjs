import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft, pulse, rubberBand, rollIn, hinge } from 'react-animations';

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

// ----- Pulsing Animation ------ //
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
animation: 3s ${hingeAnimation}
`;