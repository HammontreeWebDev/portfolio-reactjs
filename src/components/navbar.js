import React from 'react';
import '../assets/css/navbar.css';

function Navbar(props) {
  return (
      <nav className='navbar navbar-dark bg-dark custom-bg'>
        <div className='container-fluid'>
          <a className='navbar-brand' href="#">{props.about}</a>
          <a className='navbar-brand' href="#">{props.portfolio}</a>
          <a className='navbar-brand' href="#">{props.contact}</a>
          <a className='navbar-brand' href="#">{props.resume}</a>
        </div>
      </nav>
  );
}

export default Navbar;