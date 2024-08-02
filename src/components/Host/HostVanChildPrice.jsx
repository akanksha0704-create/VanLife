import React from 'react';
import { useOutletContext } from 'react-router';

function HostVanChildPrice() {
  const { van } = useOutletContext();
  return (
    <div>
      <p>Price : {van.price}</p>
    </div>
  );
}

export default HostVanChildPrice;
