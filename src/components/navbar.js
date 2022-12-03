import React from 'react';
import '../assets/css/navbar.css';

function Navbar(props) {
  return (
      <nav className='navbar nav-bg'>
        <div className='container-fluid'>
          <h1 className='name-font'>Kaileb Hammontree</h1>
          <a className='nav-font' href="#">{props.about}</a>
          <a className='nav-font' href="#">{props.portfolio}</a>
          <a className='nav-font' href="#">{props.contact}</a>
          <a className='nav-font' href="#">{props.resume}</a>
        </div>
      </nav>
  );
}

export default Navbar;