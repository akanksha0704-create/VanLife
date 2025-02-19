import React from 'react';
import Dashboard from './Dashboard';
import Reviews from './Reviews';
import Income from './Income';
import { NavLink, Outlet } from 'react-router-dom';

function Host() {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };
  return (
    <div>
      <nav className='host-nav'>
        <NavLink
          to='.'
          end
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          DashBoard
        </NavLink>

        <NavLink
          to='income'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Income
        </NavLink>

        <NavLink
          to='vans'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to='reviews'
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Host;
