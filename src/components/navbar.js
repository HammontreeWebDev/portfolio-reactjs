import React from 'react';
import '../assets/css/navbar.css';

function Navbar(props) {
  return (
      <nav className='navbar nav-bg'>
        <div className='container-fluid'>
          <h1>Kaileb Hammontree</h1>
          <a className='navbar-brand' href="#">{props.about}</a>
          <a className='navbar-brand' href="#">{props.portfolio}</a>
          <a className='navbar-brand' href="#">{props.contact}</a>
          <a className='navbar-brand' href="#">{props.resume}</a>
        </div>
      </nav>
  );
}

export default Navbar;