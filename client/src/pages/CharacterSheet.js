import React from 'react';
import Auth from '../utils/auth';
import { QUERY_CHARACTER, QUERY_MOVES } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

function CharacterSheet({ currentCharacterPage, handleCharacterPageChange })
{

    if (!Auth.loggedIn) {
        window.location.assign('/');
    }

    const { characterId } = useParams();

    let { data } = useQuery(QUERY_CHARACTER, {
        variables: { _id: characterId },
    });

    const character = data?.getCharacter || {};

    localStorage.setItem("playbook", character.playbook);

return (
    <div className="character-info-tabs">
        <a
            href="#stats"
            onClick={() => handleCharacterPageChange('Stats')}
            className={currentCharacterPage === 'Stats' ? 'info-link active' : 'info-link'}
        >
            Stats
        </a>
        <a
            href="#misc"
            onClick={() => handleCharacterPageChange('Misc')}
            className={currentCharacterPage === 'Misc' ? 'info-link active' : 'info-link'}
        >
            Misc
        </a>
        <a
            href="#moves"
            onClick={() => handleCharacterPageChange('Moves')}
            className={currentCharacterPage === 'Moves' ? 'info-link active' : 'info-link'}
        >
            Moves
        </a>
        <a
            href="#basic-moves"
            onClick={() => handleCharacterPageChange('BasicMoves')}
            className={currentCharacterPage === 'BasicMoves' ? 'info-link active' : 'info-link'}
        >
            Basic Moves
        </a>
    </div>
);
}

export default CharacterSheet;