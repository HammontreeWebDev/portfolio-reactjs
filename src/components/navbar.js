import React from 'react';
import '../assets/css/navbar.css';
import { BounceInDownDiv } from './Animations';
import navNameLogo from '../assets/img/transparent-name-logo.png';

export function NavBar(props) {
  return (
    <BounceInDownDiv>
      <nav className='navbar main-nav-bg'>
        <div className='container-fluid'>
          <img className='nav-img' src={navNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
          <a className='nav-font' href="#">{props.about}</a>
          <a className='nav-font' href="#">{props.portfolio}</a>
          <a className='nav-font' href="#">{props.contact}</a>
          <a className='nav-font' href="#">{props.resume}</a>
        </div>
      </nav>
    </BounceInDownDiv>
  );
}

console.error(new Error);