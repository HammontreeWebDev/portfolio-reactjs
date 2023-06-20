import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { BounceInDownHeader } from '../../utils/Animations';
import navNameLogo from '../../assets/img/trans-web-header.webp';
import 'hover.css';
import Dropdown from 'react-bootstrap/Dropdown';

export function NavBar(props) {
  const navigate = useNavigate();
  const [highlightedButton, setHighlightedButton] = useState(null);

  const highlightNav = (e) => {
    setHighlightedButton(e.target.innerText);
  };

  const handleClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <BounceInDownHeader className='header-bg'>
      <img
        className='nav-img'
        src={navNameLogo}
        alt='Avatar of Kaileb with his name and text that says Full-Stack Web Development'
      />
      <nav className='container-fluid custom-nav'>
        <button
          className={`nav-font hvr-wobble-horizontal ${
            highlightedButton === 'About Me' ? 'highlighted' : ''
          }`}
          onClick={(e) => {
            highlightNav(e);
            handleClick('/about_me');
          }}
        >
          About Me
        </button>
        <button
          className={`nav-font hvr-wobble-horizontal ${
            highlightedButton === 'Portfolio' ? 'highlighted' : ''
          }`}
          onClick={(e) => {
            highlightNav(e);
            handleClick('/portfolio');
          }}
        >
          Portfolio
        </button>
        <button
          className={`nav-font hvr-wobble-horizontal ${
            highlightedButton === 'Services' ? 'highlighted' : ''
          }`}
          onClick={(e) => {
            highlightNav(e);
            handleClick('/services');
          }}
        >
          Services
        </button>
        <Dropdown>
          <Dropdown.Toggle id='custom-dropdown' className='hvr-wobble-horizontal'>
            More
          </Dropdown.Toggle>

          <Dropdown.Menu id='custom-menu'>
            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${
                  highlightedButton === 'Socials' ? 'highlighted' : ''
                }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick('/socials');
                }}
              >
                Socials
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${
                  highlightedButton === 'Contact Form' ? 'highlighted' : ''
                }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick('/contact');
                }}
              >
                Contact Form
              </button>
            </Dropdown.Item>

            <Dropdown.Item>
              <button
                className={`nav-font hvr-wobble-horizontal ${
                  highlightedButton === 'Resume' ? 'highlighted' : ''
                }`}
                onClick={(e) => {
                  highlightNav(e);
                  handleClick('/resume');
                }}
              >
                Resume
              </button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </BounceInDownHeader>
  );
}