import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';

const QueryCharacter = () => {

    // let drive = localStorage.getItem('drive');
    // let playbook = localStorage.getItem('playbook');

    let { data } = useQuery(QUERY_CHARACTER, {
        variables: { name: drive, playbook: playbook }
    });

    const selectedDrive = data?.getDrive || [];

    const listOfDrives = selectedDrive.map(drive => {
        return <div className="finalize-drive" key={drive._id}>
            <h2>{drive.name}</h2>
            <p>{drive.description}</p>
        </div>
    })

    return (
        <div>
            {listOfDrives}
        </div>
    )

}

export default QueryCharacter;