import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';
import icon from '../img/icon-blessed.png'

function MyCharacters() {

    let username = localStorage.getItem('username');

    let { data } = useQuery(QUERY_CHARACTER, {
        variables: { characterCreator: username }
    });

    const currentCharacter = data?.getCharacter || [];

    const listOfCharacters = currentCharacter.map(character => {
        return <div className="character-card" key={character._id}>
            <h2>{character.name} {character.playbook}</h2>
            <div className="playbook-image-container">
                <img src={icon} className="playbook-image" alt="Icon"></img>
            </div>
            <button data-id={character._id}>Select</button>
        </div>
    })

    return (
        <div className="content character-card-container">
            {listOfCharacters}
        </div>
    )
}

export default MyCharacters;