import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink, Outlet } from 'react-router-dom';

function HostVanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section>
      <div>
        <Link to='..' relative='path' className='back-button'>
          &larr; <span>Back to all vans</span>
        </Link>
      </div>
      <div className='host-van-detail-layout-container'>
        <div>
          {van ? (
            <div className='host-van-detail'>
              <img src={van.imageUrl} width={150} />
              <div className='host-van-detail-info-text'>
                <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                <h3>{van.name}</h3>
                <h4>{van.price}</h4>
              </div>
            </div>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div>
          <nav className='host-van-detail-nav'>
            <NavLink to='.'>Detail</NavLink>
            <NavLink to='price'>Price</NavLink>
            <NavLink to='photo'>Photo</NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      </div>
    </section>
  );
}

export default HostVanDetail;
