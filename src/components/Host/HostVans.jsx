import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch('/api/host/vans')
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className='container'>
      {vans.map((van) => (
        <Link
          to={`/host/vans/${van.id}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div key={van.id} className='card'>
            <img src={van.imageUrl} alt={van.name} className='card-image' />
            <div className='card-details'>
              <h2>{van.name}</h2>
              <p>
                <strong>${van.price}</strong>/day
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HostVans;
