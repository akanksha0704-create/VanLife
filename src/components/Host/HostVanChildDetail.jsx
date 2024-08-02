import React from 'react';
import { useOutletContext } from 'react-router';

function HostVanChildDetail() {
  const { van } = useOutletContext();

  return (
    <section className='host-van-detail-info'>
      {van && (
        <>
          <h4>
            Name: <span>{van.name}</span>
          </h4>
          <h4>
            Category: <span>{van.type}</span>
          </h4>
          <h4>
            Description: <span>{van.description}</span>
          </h4>
          <h4>
            Visibility: <span>Public</span>
          </h4>
        </>
      )}
    </section>
  );
}

export default HostVanChildDetail;
