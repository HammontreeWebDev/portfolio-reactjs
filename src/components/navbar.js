import React from 'react';

function Navbar(props) {
  return (
      <nav className='navbar navbar-dark bg-dark'>
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