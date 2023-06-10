import React from 'react';
import './navbar.css';
import { BounceInDownHeader } from '../../utils/Animations';
import navNameLogo from '../../assets/img/trans-web-header.webp';
import 'hover.css';
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBar(props) {

  // note that the bounce in down component found in animations is a styled.header
  return (
    <BounceInDownHeader className='header-bg'>
      <img className='nav-img' src={navNameLogo} alt='Avatar of Kaileb with his name and text that says Full-Stack Web Development' />
      <nav className='container-fluid custom-nav'>
        <button className='nav-font' onClick={props.showAbout} >About Me</button>
        <button className='nav-font' onClick={props.showPortfolio} >Portfolio</button>
        <button className='nav-font' onClick={props.showServices} >Services</button>
        <Dropdown>
          <Dropdown.Toggle id='custom-dropdown'>
            More
          </Dropdown.Toggle>

          <Dropdown.Menu id='custom-menu'>
            <Dropdown.Item><button className='nav-font' onClick={props.showSocials}>Socials</button></Dropdown.Item>

            <Dropdown.Item>
              <button className='nav-font' onClick={props.showContact} >Contact Form</button>
            </Dropdown.Item>

            <Dropdown.Item>
            <button className='nav-font' onClick={props.showResume} >Download Resume</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </BounceInDownHeader>
  );
};