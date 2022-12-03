import React from 'react';
import '../assets/css/navbar.css';
import { BouncyDiv, PulsingDiv, RubberBandDiv, Hinge } from './Animations';

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
        <Hinge>
          <h1 className='name-font'>Kaileb Hammontree</h1>
        </Hinge>
        <a className='nav-font' href="#">{props.about}</a>
        <a className='nav-font' href="#">{props.portfolio}</a>
        <a className='nav-font' href="#">{props.contact}</a>
        <a className='nav-font' href="#">{props.resume}</a>
      </div>
    </nav>

  );
}
