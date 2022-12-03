import React from 'react';
import '../assets/css/navbar.css';
import { BouncyDiv, PulsingDiv, RubberBandDiv, LightSpeedDiv } from './Animations';

export function NavbarAnimation(props) {
  return (
    <BouncyDiv>
      <nav className='navbar nav-bg'>
        <div className='container-fluid'>

          <PulsingDiv>
            <h1 className='name-font'>Kaileb Hammontree</h1>
          </PulsingDiv>

          <RubberBandDiv>
            <a className='nav-font' href="#">{props.about}</a>
          </RubberBandDiv>

          <RubberBandDiv>
            <a className='nav-font' href="#">{props.portfolio}</a>
          </RubberBandDiv>

          <RubberBandDiv>
            <a className='nav-font' href="#">{props.contact}</a>
          </RubberBandDiv>

          <RubberBandDiv>
            <a className='nav-font' href="#">{props.resume}</a>
          </RubberBandDiv>

        </div>
      </nav>
    </BouncyDiv>
  );
}

export function NavbarDeleteName(props) {
  return (

    <nav className='navbar nav-bg'>
      <div className='container-fluid'>
        <LightSpeedDiv>
          <h1 className='name-font'>Kaileb Hammontree</h1>
        </LightSpeedDiv>
        <a className='nav-font' href="#">{props.about}</a>
        <a className='nav-font' href="#">{props.portfolio}</a>
        <a className='nav-font' href="#">{props.contact}</a>
        <a className='nav-font' href="#">{props.resume}</a>
      </div>
    </nav>

  );
}
