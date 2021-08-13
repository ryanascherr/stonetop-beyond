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
      <select>
        <option value="-">-</option>
        {originDropdown}
      </select>
      <input type="text" name="" id=""></input>
      <div className="origin-container">
        {listOfOrigins}
      </div>
      <button>Select</button>
    </div>
  );
}