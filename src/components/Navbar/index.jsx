import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { BounceInDownHeader } from '../../utils/Animations';
import navNameLogo from '../../assets/img/trans-web-header.webp';
import 'hover.css';
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBar(props) {

  const navigate = useNavigate();

  // note that the bounce in down component found in animations is a styled.header
  return (
    <BounceInDownHeader className='header-bg'>
      <img className='nav-img' src={navNameLogo} alt='Avatar of Kaileb with his name and text that says Full-Stack Web Development' />
      <nav className='container-fluid custom-nav'>
        <button className='nav-font hvr-wobble-horizontal' onClick={() => navigate('/about_me')} >About Me</button>
        <button className='nav-font hvr-wobble-horizontal' onClick={() => navigate('/portfolio')} >Portfolio</button>
        <button className='nav-font hvr-wobble-horizontal' onClick={navigate('/services')} >Services</button>
        <Dropdown>
          <Dropdown.Toggle id='custom-dropdown' className='hvr-wobble-horizontal'>
            More
          </Dropdown.Toggle>

          <Dropdown.Menu id='custom-menu'>
            <Dropdown.Item><button className='nav-font hvr-wobble-horizontal' onClick={() => navigate('/socials')}>Socials</button></Dropdown.Item>

            <Dropdown.Item>
              <button className='nav-font hvr-wobble-horizontal' onClick={() => navigate('/contact')} >Contact Form</button>
            </Dropdown.Item>

            <Dropdown.Item>
            <button className='nav-font hvr-wobble-horizontal' onClick={() => navigate('/resume')} >Resume</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </BounceInDownHeader>
  );
};