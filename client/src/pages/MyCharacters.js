import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { useParams, Link } from 'react-router-dom';
import icon from '../img/icon-blessed.png';

function MyCharacters() {

    const { username: userParam } = useParams();

    const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });

    console.log(data);
  
    const user = data?.me || data?.user || {};

    console.log(user.username);
  
    const characters = user.characters;

    console.log(characters);

    // if (!characters) {
    //     window.location.assign('/my-characters');
    // }

    const listOfCharacters = characters.map(character => {
        return <div className="character-card card" key={character._id}>
            <h2>{character.name} {character.playbook}</h2>
            <h2>Level {character.level}</h2>
            <div className="playbook-image-container">
                <img src={icon} className="playbook-image" alt="Icon"></img>
            </div>
            <Link to={`/characters/${character._id}`}>
                <button data-id={character._id} className="character-btn">Select</button>
            </Link>
        </div>
    })

    return (
        <div className="content">
            {/* <h2>{user.username}</h2> */}
            <h2 className="my-characters-title">My Characters</h2>
            <div className="character-card-container">
                {listOfCharacters}
            </div>
        </div>
    )
}

export default MyCharacters;