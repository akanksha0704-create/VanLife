import React from 'react';
import { useOutletContext } from 'react-router';

function HostVanChildPhoto() {
  const { van } = useOutletContext();

  return (
    <div>
      {van ? (
        <>
          <img src={van.imageUrl} width={150} />
        </>
      ) : (
        <h4>Loading..</h4>
      )}
    </div>
  );
}

export default HostVanChildPhoto;
