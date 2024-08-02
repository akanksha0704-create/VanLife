import React from 'react';
import { NavLink } from 'react-router-dom';

function Parent() {
  const styles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };
  return (
    <div>
      <header>
        <NavLink
          className='site-logo'
          to='.'
          style={({ isActive }) => (isActive ? styles : null)}
        >
          #VANLIFE
        </NavLink>
        <nav>
          <NavLink
            to='about'
            style={({ isActive }) => (isActive ? styles : null)}
          >
            About
          </NavLink>
          <NavLink
            to='vans'
            style={({ isActive }) => (isActive ? styles : null)}
          >
            Vans
          </NavLink>
          <NavLink
            to='host'
            style={({ isActive }) => (isActive ? styles : null)}
          >
            Host
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Parent;
