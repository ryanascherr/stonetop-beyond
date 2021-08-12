import React from 'react';
import blessedPic from '../../img/icon-blessed.png';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYBOOKS } from '../../utils/queries'

export default function Playbook() {

  const { data } = useQuery(QUERY_PLAYBOOKS);
  console.log(data);
  const playbooks = data?.playbooks || [];
  console.log(playbooks);

  const listOfPlaybooks = playbooks.map(playbook => {
    return <div>
      {playbook.name}
    </div>
  })

  return (
    <div className="">
      {listOfPlaybooks}
      Playbooks
    </div>
  );
}