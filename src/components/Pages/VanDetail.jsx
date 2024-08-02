import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function VanDetail() {
  const [vans, setVans] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);

  return (
    <>
      <div className='van-detail-container'>
        {vans ? (
          <div>
            <div className='van-detail'>
              <img src={vans.imageUrl} />
              <i className={`van-type ${vans.type} selected`}>{vans.type}</i>
            </div>
            <div>
              <h2>{vans.name}</h2>
              <p>
                <strong>${vans.price}</strong>/day
              </p>
              <p>{vans.description}</p>
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default VanDetail;
