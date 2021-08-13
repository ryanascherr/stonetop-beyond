import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ORIGIN } from '../utils/queries';

export default function Origin() {

  const { data } = useQuery(QUERY_ORIGIN, {
    variables: { playbook: "The Heavy" }
  });
  console.log(data);
  const origins = data?.getOrigin || [];

  const originDropdown = origins.map(origin => {
    return <option value={origin.location}>{origin.location}</option>
  })

  const listOfOrigins = origins.map(origin => {
    return <div className="origin" key={origin._id}>
      <h2>{origin.location}</h2>
      <p>{origin.names}</p>
    </div>
  })

  return (
    <div className="content">
      <h2>Pick one origin and a name to match (or make up something similar)!</h2>
      <h3>Choose a place of origin</h3>
      <select>
        <option value="-">-</option>
        {originDropdown}
      </select>
      <h3>Choose a name</h3>
      <input type="text" name="" id=""></input>
      <button>Select</button>
      <div className="origin-container">
        {listOfOrigins}
      </div>
    </div>
  );
}