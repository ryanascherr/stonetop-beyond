import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORIGIN } from '../utils/queries';

export default function Origin() {

  const { data } = useQuery(QUERY_ORIGIN, {
    variables: { playbook: "The Blessed" }
  });
  console.log(data);
  const origin = data?.getOrigin || [];

  return (
    <div className="content">
      <div className="origin-container">
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
        <div className="origin">
          <h2>{origin.location}</h2>
          <p>{origin.names}</p>
        </div>
      </div>
    </div>
  );
}