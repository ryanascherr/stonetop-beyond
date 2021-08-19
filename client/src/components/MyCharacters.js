import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CHARACTER } from '../utils/queries';
import icon from '../img/icon-blessed.png'

function MyCharacters() {

    let listOfCharacters;

    let username = localStorage.getItem('username');

    let { data } = useQuery(QUERY_CHARACTER, {
        variables: { characterCreator: username }
    });

    const currentCharacter = data?.getCharacter || [];

    if (currentCharacter.length === 0) {
        listOfCharacters = <h2>You don't have any character yet!</h2>
    } else {
        listOfCharacters = currentCharacter.map(character => {
            return <div className="character-card" key={character._id}>
                <h2>{character.name} {character.playbook}</h2>
                <div className="playbook-image-container">
                    <img src={icon} className="playbook-image" alt="Icon"></img>
                </div>
                <button data-id={character._id}>Select</button>
            </div>
        })
    }

    return (
        <div className="content">
            <h2 className="my-characters-title">My Characters</h2>
            <div className="character-card-container">
                {listOfCharacters}
            </div>
        </div>
    )
}

export default MyCharacters;