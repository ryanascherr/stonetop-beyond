import React from 'react';
import Auth from '../utils/auth';

function CharacterSheet({ currentCharacterPage, handleCharacterPageChange })
{

    if (!Auth.loggedIn) {
        window.location.assign('/');
    }

return (
    <div className="nav-tabs">
        <a
            href="#stats"
            onClick={() => handleCharacterPageChange('Stats')}
            className={currentCharacterPage === 'Stats' ? 'nav-link active' : 'nav-link'}
        >
            Stats
        </a>
        <a
            href="#misc"
            onClick={() => handleCharacterPageChange('Misc')}
            className={currentCharacterPage === 'Misc' ? 'nav-link active' : 'nav-link'}
        >
            Misc
        </a>
        <a
            href="#moves"
            onClick={() => handleCharacterPageChange('Moves')}
            className={currentCharacterPage === 'Moves' ? 'nav-link active' : 'nav-link'}
        >
            Moves
        </a>
        <a
            href="#basic-moves"
            onClick={() => handleCharacterPageChange('BasicMoves')}
            className={currentCharacterPage === 'BasicMoves' ? 'nav-link active' : 'nav-link'}
        >
            Basic Moves
        </a>
    </div>
);
}

export default CharacterSheet;