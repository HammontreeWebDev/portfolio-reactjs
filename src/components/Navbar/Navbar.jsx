import React from 'react';
import './navbar.css';
import { BounceInDownHeader } from '../../utils/Animations';
import navNameLogo from '../../assets/img/transparent-name-logo.png';
import 'hover.css';

export function NavBar(props) {

  // note that the bounce in down component found in animations is a styled.header
  return (
    <BounceInDownHeader className='header-bg'>
      <img className='nav-img' src={navNameLogo} alt='laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
      <nav className='container-fluid custom-nav'>
        <a className='nav-font hvr-buzz' onClick={props.showAbout} >{props.about}</a>
        <a className='nav-font hvr-buzz' onClick={props.showPortfolio} >{props.portfolio}</a>
        <a className='nav-font hvr-buzz' onClick={props.showContact} >{props.contact}</a>
        <a className='nav-font hvr-buzz' onClick={props.showResume} >{props.resume}</a>
      </nav>
    </BounceInDownHeader>
  );
}