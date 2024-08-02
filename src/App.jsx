import { useState } from 'react';
import './App.css';
import Home from './components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/Pages/About';
import Layout from './components/navigation/Layout';
import Vans from './components/Pages/Vans';
import './server';
import VanDetail from './components/Pages/VanDetail';
import Dashboard from './components/Host/Dashboard';
import Reviews from './components/Host/Reviews';
import Income from './components/Host/Income';
import Host from './components/Host/Host';
import HostVans from './components/Host/HostVans';
import HostVanDetail from './components/Host/HostVanDetail';
import HostVanChildDetail from './components/Host/HostVanChildDetail';
import HostVanChildPrice from './components/Host/HostVanChildPrice';
import HostVanChildPhoto from './components/Host/HostVanChildPhoto';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='host' element={<Host />}>
            <Route index element={<Dashboard />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanChildDetail />} />
              <Route path='price' element={<HostVanChildPrice />} />
              <Route path='photo' element={<HostVanChildPhoto />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
