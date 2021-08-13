import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_DRIVE } from '../utils/queries';

export default function Drive() {

  const { data } = useQuery(QUERY_DRIVE, {
    variables: { playbook: "The Heavy" }
  });
  console.log(data);
  const drives = data?.getDrive || [];

  const listOfDrives = drives.map(drive => {
    return <div className="drive" key={drive._id}>
      <h2>{drive.name}</h2>
      <p>{drive.description}</p>
      <button>Select</button>
    </div>
  })

  return (
    <div className="content">
      <div className="drive-container">
        {listOfDrives}
      </div>
    </div>
  );
}