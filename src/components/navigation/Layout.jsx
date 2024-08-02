import React from 'react';
import { Outlet } from 'react-router';
import Parent from './Parent';
import Footer from '../Pages/Footer';

function Layout() {
  return (
    <div className='site-wrapper'>
      <Parent />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
