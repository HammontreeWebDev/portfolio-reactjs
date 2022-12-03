import React from 'react';
import '../assets/css/navbar.css';
import {BouncyDiv, PulsingDiv, RubberBandDiv} from './animations';

function Navbar(props) {
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

export default Navbar;