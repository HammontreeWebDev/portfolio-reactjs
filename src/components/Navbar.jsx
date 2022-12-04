import React, { useState } from 'react';
import '../assets/css/navbar.css';
import { BounceInDownHeader } from './Animations';
import navNameLogo from '../assets/img/transparent-name-logo.png';
import 'hover.css';

export function NavBar(props) {

  const [showContent, setShowContent] = useState(false);
  const onClick = () => setShowContent(true);

  // note that the bounce in down component found in animations is a styled.header
  return (
    <BounceInDownHeader>
      <nav className='navbar main-nav-bg'>
        <div className='container-fluid'>
          <img className='nav-img' src={navNameLogo} alt='image/logo of laptop with Kaileb Hammontree Full-Stack Web Development printed underneath' />
          <a className='nav-font hvr-buzz' onClick={onClick}>{props.about}</a>
          <a className='nav-font hvr-buzz' onClick={onClick}>{props.portfolio}</a>
          <a className='nav-font hvr-buzz' onClick={onClick}>{props.contact}</a>
          <a className='nav-font hvr-buzz' onClick={onClick}>{props.resume}</a>
        </div>
      </nav>
    </BounceInDownHeader>
  );
}