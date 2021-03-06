import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYBOOK } from '../utils/queries';
import blessedIcon from '../img/icon-blessed.png';

const QueryPlaybook = () => {

let playbook = localStorage.getItem('playbook');

let { data } = useQuery(QUERY_PLAYBOOK, {
  variables: { name: playbook }
});

const selectedPlaybook = data?.getPlaybook || [];

const listOfPlaybooks = selectedPlaybook.map(playbook => {
  return <div className="finalize-card" id={playbook.name} key={playbook._id}>
    <h2>{playbook.name}</h2>
    <h3>{playbook.complexity}</h3>
    <div className="playbook-image-container">
      <img src={blessedIcon} className="playbook-image" alt="Icon"></img>
    </div>
    <p className="center-p">{playbook.description}</p>
  </div>
})

return (
    <div>
        {listOfPlaybooks}
    </div>
)

}

export default QueryPlaybook;