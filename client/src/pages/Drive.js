import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DRIVE } from '../utils/queries';

export default function Drive() {

  const { data } = useQuery(QUERY_DRIVE, {
    variables: { playbook: "The Blessed" }
  });
  console.log(data);
  const drive = data?.getDrive || [];

  return (
    <div className="content">
      <div className="drive-container">
        <div className="drive">
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
          <button>Select</button>
        </div>
        <div className="drive">
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
          <button>Select</button>
        </div>
        <div className="drive">
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
          <button>Select</button>
        </div>
        <div className="drive">
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
          <button>Select</button>
        </div>
        <div className="drive">
          <h2>{drive.name}</h2>
          <p>{drive.description}</p>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
}