import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYBOOKS } from '../utils/queries';

export default function Playbook() {

  const { data } = useQuery(QUERY_PLAYBOOKS);
  console.log(data);

  const playbooks = data?.getPlaybooks || [];
  console.log(playbooks);

  const listOfPlaybooks = playbooks.map(playbook => {
    return <div className="playbook" key={playbook._id}>
      <h2>{playbook.name}</h2>
      <h3>{playbook.complexity}</h3>
      <div className="playbook-image-container">
        <img src={playbook.image}></img>
      </div>
      <p>{playbook.description}</p>
      <button>Select</button>
    </div>
  })

  return (
    <div className="content">
      <div className="playbook-container">
        {listOfPlaybooks}
      </div>
    </div>
  );
}